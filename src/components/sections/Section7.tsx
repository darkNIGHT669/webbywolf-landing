import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Section7 = () => {
  const features = [
    "Lorem Ipsum", "Lorem Ipsum",
    "Lorem Ipsum", "Lorem Ipsum",
    "Lorem Ipsum", "Lorem Ipsum",
  ];

  return (
    <section className="w-full bg-white section-padding relative overflow-hidden">
      {/* Decorative Lines Top Right */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line x1="0" y1="0" x2="100" y2="100" stroke="#2563EB" strokeWidth="2" />
          <line x1="20" y1="0" x2="100" y2="80" stroke="#2563EB" strokeWidth="2" />
        </svg>
      </div>

      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/section7-fistbump.jpg"
                alt="Motorcycle riders fist bump"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <p className="tagline">Lorem ipsum</p>
            <h2 className="heading-lg text-[#1E293B] mb-4">
              <span className="text-[#2563EB]">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
            </h2>
            <p className="text-body mb-6">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {features.map((feature, index) => (
                <p key={index} className="text-[#1E293B]">{feature}</p>
              ))}
            </div>

            <Button withArrow>Loerum Ipsum</Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2563EB] via-[#10B981] to-[#8B5CF6]"></div>
    </section>
  );
};

export default Section7;