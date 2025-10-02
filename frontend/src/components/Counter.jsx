// src/components/Counter.jsx
import React, { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

function Counter({ from, to, duration = 2 }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = Math.round(value);
      }
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={nodeRef} />;
}

export default Counter;