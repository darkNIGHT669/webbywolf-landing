import React from "react";
import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="w-full bg-white section-padding">
      <div className="section-container max-w-3xl text-center">
        {/* Logo */}
        <div className="inline-block bg-[#1E293B] text-white px-6 py-2 rounded-md font-bold text-lg mb-6">
          LOGO
        </div>

        <h2 className="heading-lg text-[#1E293B] mb-4">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
        </h2>

        <p className="text-body mb-8 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra 
          tempor quis arcu. Ipsum nullam.
        </p>

        <Button withArrow>Loerum Ipsum</Button>
      </div>
    </section>
  );
};

export default CTA;