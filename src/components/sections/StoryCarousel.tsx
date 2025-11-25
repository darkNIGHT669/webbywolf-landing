"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const StoryCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const stories = [
    {
      image: "/images/story-1.jpg",
      category: "Artist & Investor",
      description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    },
    {
      image: "/images/story-mountains.jpg",
      category: "Artist & Investor",
      description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    },
    {
      image: "/images/story-3.jpg",
      category: "Entrepreneur",
      description: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
    },
  ];

  return (
    <section className="w-full bg-white section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-lg text-[#1E293B] mb-4">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus 
            quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum 
            etiam dignissim.
          </p>
        </div>

        {/* Story Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-0">
            {/* Image */}
            <div className="w-full md:w-3/5 relative h-[300px] md:h-[400px] rounded-l-xl overflow-hidden">
              <Image
                src={stories[activeSlide].image}
                alt="Story"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Card */}
            <div className="w-full md:w-2/5 bg-white shadow-xl rounded-r-xl p-8 flex flex-col justify-center md:-ml-8 md:my-8 relative z-10">
              <h3 className="text-xl font-bold text-[#1E293B] mb-4">
                {stories[activeSlide].category}
              </h3>
              <p className="text-[#64748B] mb-6">
                {stories[activeSlide].description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#2563EB] font-medium hover:underline">
                Read Full Story
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-300 ${
                activeSlide === index
                  ? "w-8 h-2 bg-[#2563EB] rounded-full"
                  : "w-2 h-2 bg-[#2563EB]/40 rounded-full hover:bg-[#2563EB]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryCarousel;