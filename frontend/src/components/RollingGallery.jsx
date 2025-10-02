// src/components/RollingGallery.jsx
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";
import { useTheme } from "../context/ThemeContext";

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const { theme } = useTheme();
  const [isScreenSizeMd, setIsScreenSizeMd] = useState(
    window.innerWidth >= 768
  );
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  useEffect(() => {
    const handleResize = () => setIsScreenSizeMd(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 60, ease: "linear", repeat: Infinity }, // Duration badhayi
    });
  };

  useEffect(() => {
    if (autoplay && images.length > 0) {
      startInfiniteSpin(rotation.get());
    } else {
      controls.stop();
    }
  }, [autoplay, images]);

  if (images.length === 0) {
    return null;
  }

  // === CHANGES YAHAN HAIN ===
  const cylinderWidth = isScreenSizeMd ? 3200 : 2000; // Cylinder ka size badhaya
  const faceCount = images.length > 0 ? images.length : 1;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const dragFactor = 0.05;

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") rotation.set(latest.rotateY);
  };
  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };
  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startInfiniteSpin(finalAngle);
  };
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) controls.stop();
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) startInfiniteSpin(rotation.get());
  };

  const fadeColor = theme === "light" ? "#f9fafb" : "#0f172a";

  return (
    // Container ki height badhayi
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden my-12">
      <div
        className="absolute top-0 left-0 h-full w-[100px] z-10"
        style={{
          background: `linear-gradient(to left, rgba(0,0,0,0) 0%, ${fadeColor} 100%)`,
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[100px] z-10"
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,0) 0%, ${fadeColor} 100%)`,
        }}
      />

      {/* Perspective badhaya */}
      <div className="flex h-full items-center justify-center [perspective:2000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex h-full cursor-grab items-center justify-center"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-full items-center justify-center [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              {/* Image ka size badhaya */}
              <img
                src={url}
                alt={`gallery-item-${i}`}
                className="pointer-events-none h-[250px] w-[400px] md:h-[400px] md:w-[600px] rounded-xl border-4 border-white/20 object-cover shadow-2xl"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;