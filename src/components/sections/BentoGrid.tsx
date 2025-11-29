import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const BentoGrid = () => {
  return (
    <section className="w-full bg-white section-padding relative overflow-hidden">
      {/* Decorative Curves */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 150 0 Q 200 100 150 200" fill="none" stroke="#94A3B8" strokeWidth="2" />
          <path d="M 120 0 Q 170 100 120 200" fill="none" stroke="#94A3B8" strokeWidth="2" />
        </svg>
      </div>

      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-2/5">
            <p className="text-sm font-medium text-[#64748B] uppercase tracking-wider mb-2">NO LIMITS</p>
            <h2 className="heading-lg text-[#1E293B] mb-4">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="text-body mb-8">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra 
              tempor quis arcu. Ipsum nullam.
            </p>
            <Button withArrow>Loerum Ipsum</Button>
          </div>

          {/* Right - Bento Grid */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[500px]">
              {/* Large top-right */}
              <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
                <Image
                  src="/images/bento-1.jpg"
                  alt="Motorcycle riders at night"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Small top-right */}
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/bento-2.jpg"
                  alt="Motorcycle at sunset"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom right corner */}
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/bento-3.jpg"
                  alt="Red motorcycles"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom left - large */}
              <div className="col-span-2 relative rounded-xl overflow-hidden">
                <Image
                  src="/images/bento-4.jpg"
                  alt="Group of riders"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom small */}
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/bento-5.jpg"
                  alt="Motorcycle detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default BentoGrid;