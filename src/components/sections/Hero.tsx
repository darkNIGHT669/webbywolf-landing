import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-16 py-12 lg:py-24 flex flex-col justify-center">
          <h1 className="heading-xl text-[#1E293B] mb-6">
            Lorem ipsum dolor sit amet
          </h1>
          
          <p className="text-body mb-8 max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit 
            sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero 
            imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. 
            Nunc euismod ultrices etiam nulla habitasse.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
            <button className="btn-primary whitespace-nowrap">
              Submit
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <CheckCircle className="text-[#2563EB]" size={20} />
            <span>No credit card required!</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/images/hero-motorcycle.jpg"
            alt="Motorcycle riders"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;