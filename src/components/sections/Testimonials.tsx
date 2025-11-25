"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone, Star, Shirt, Lamp } from "lucide-react";
import Button from "../ui/Button";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      icon: Phone,
      text: "Purus maecenas quis elit eu, aliquet. Tellus portitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod.",
      name: "Jane Cooper",
      avatar: "/images/avatar-1.jpg",
    },
    {
      icon: Star,
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
      name: "Ralph Edwards",
      avatar: "/images/avatar-2.jpg",
    },
    {
      icon: Shirt,
      text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium.",
      name: "Courtney Henry",
      avatar: "/images/avatar-3.jpg",
    },
    {
      icon: Lamp,
      text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet.",
      name: "Cameron Williamson",
      avatar: "/images/avatar-4.jpg",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full bg-[#2563EB] section-padding relative overflow-hidden">
      {/* Decorative Waves */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 560" preserveAspectRatio="none">
          <path d="M 0 200 Q 360 100 720 200 T 1440 200" fill="none" stroke="white" strokeWidth="2" />
          <path d="M 0 300 Q 360 200 720 300 T 1440 300" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-blue-200 mb-2">Join other Sun harvesters</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="text-blue-100 mt-4 max-w-xl">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi 
              tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
          </div>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2563EB] shrink-0">
            Lorem Ipsum
          </Button>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <testimonial.icon className="text-[#2563EB] mb-4" size={28} />
              <p className="text-[#64748B] text-sm mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium text-[#1E293B]">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2563EB] hover:bg-blue-50 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;