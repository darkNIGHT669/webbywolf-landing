import React from "react";
import Button from "../ui/Button";

const Banner1 = () => {
  return (
    <section className="w-full section-padding px-4 md:px-8">
      <div className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner1-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 text-center">
          {/* Logo */}
          <div className="inline-block bg-white text-[#1E293B] px-6 py-2 rounded-md font-bold text-lg mb-8">
            LOGO
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-6 max-w-3xl mx-auto">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
          </h2>

          <p className="text-white/80 mb-4 max-w-2xl mx-auto text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum 
            nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id 
            luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam 
            condimentum nulla quam.
          </p>

          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. 
            Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada 
            vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar 
            euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </p>

          <Button variant="outline" withArrow className="border-white text-white hover:bg-white hover:text-[#1E293B]">
            Loerum Ipsum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner1;