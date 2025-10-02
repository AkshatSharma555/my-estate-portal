// src/components/home/Testimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
  {
    quote: "JMM Homes transformed our vision into a reality. The attention to detail and commitment to quality were exceptional. We couldn't be happier with our new home.",
    author: "Prakash Gupta",
    project: "Aarohana Sky Villas"
  },
  {
    quote: "The entire process, from design to handover, was seamless. The team is professional, transparent, and truly cares about client satisfaction. Highly recommended!",
    author: "Anjali Mehta",
    project: "Serene Gardens"
  },
  {
    quote: "Our new office space at the Elysian Business Hub has been a game-changer. The modern infrastructure and thoughtful design have boosted our team's productivity.",
    author: "Vikram Singh, CEO of TechCorp",
    project: "Elysian Business Hub"
  }
];

function Testimonials() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-center p-8">
              <p className="text-xl md:text-2xl italic text-slate-700 dark:text-slate-300 mb-6">
                "{testimonial.quote}"
              </p>
              <p className="font-bold text-lg text-slate-800 dark:text-white">{testimonial.author}</p>
              <p className="text-orange-500">{testimonial.project}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;