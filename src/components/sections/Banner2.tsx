import React from "react";

const Banner2 = () => {
  return (
    <section className="w-full px-10 md:px-14">
      {/* Top Blue Line */}
     {/* <div className="w-full h-1 bg-[#2563EB]"></div>*/}
      
      <div className="max-w-6xl mx-auto relative rounded-b-2xl overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner2-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-16 md:py-20 px-6 md:px-12 text-center">
          {/* Logo */}
          <div className="inline-block bg-white text-[#1E293B] px-6 py-2 rounded-md font-bold text-lg mb-8">
            LOGO
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FBBF24] uppercase max-w-3xl mx-auto leading-relaxed">
            DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. 
            DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner2;