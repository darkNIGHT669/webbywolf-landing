import React from "react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

const BlogCards = () => {
  const cards = [
    {
      image: "/images/blog-1.jpg", 
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
    {
      image: "/images/blog-2.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
    {
      image: "/images/blog-3.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
    {
      image: "/images/blog-4.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
  ];

  return (
    <section className="w-full bg-white section-padding relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line x1="0" y1="100" x2="100" y2="0" stroke="#2563EB" strokeWidth="2" />
          <line x1="0" y1="80" x2="80" y2="0" stroke="#2563EB" strokeWidth="2" />
        </svg>
      </div>

      <div className="section-container">
        <SectionHeader
          tagline="Lorem ipsum dolor sit amet"
          title="LOREM IPSUM DOLOR SIT"
          description="Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam."
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="group">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-[#1E293B] mb-2">{card.title}</h3>
              <p className="text-sm text-[#64748B] mb-3">{card.description}</p>
              <a href="#" className="text-[#2563EB] text-sm font-medium underline hover:no-underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;