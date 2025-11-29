import React from "react";
import Image from "next/image";

const LogoCloud = () => {
  const logos = [
    { name: "Hero", src: "/images/logos/hero.png" },
    { name: "Honda", src: "/images/logos/honda.png" },
    { name: "Bajaj", src: "/images/logos/bajaj.png" },
    { name: "TVS", src: "/images/logos/tvs.png" },
    { name: "Royal Enfield", src: "/images/logos/royal-enfield.png"  },
    { name: "Yamaha", src: "/images/logos/yamaha.png" },
    { name: "KTM", src: "/images/logos/ktm.png" },
    { name: "Ather", src: "/images/logos/ather.png" },
    { name: "Ola Electric", src: "/images/logos/ola.png" },
    { name: "Revolt", src: "/images/logos/revolt.png" },
    { name: "Ultraviolette", src: "/images/logos/ultraviolette.png" },
    { name: "Tork Motors", src: "/images/logos/tork.png" },
  ];

  return (
    <section className="w-full bg-white section-padding">
      <div className="section-container">
        <h2 className="heading-lg text-[#1E293B] text-center mb-12 max-w-3xl mx-auto">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;