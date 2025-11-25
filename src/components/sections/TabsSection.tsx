"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("research");

  const tabs = [
    { id: "research", label: "Research" },
    { id: "plan", label: "Plan" },
    { id: "design", label: "Design" },
  ];

  const tabContent = {
    research: {
      description: "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.",
      image: "/images/tabs-handshake.jpg",
    },
    plan: {
      description: "Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.",
      image: "/images/tabs-handshake.jpg",
    },
    design: {
      description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt.",
      image: "/images/tabs-handshake.jpg",
    },
  };

  return (
    <section className="w-full bg-white section-padding">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="heading-lg text-[#1E293B] mb-6">
              LOREM IPSUM DOLOR SIT AMET
            </h2>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#1E293B] text-white"
                      : "bg-gray-100 text-[#64748B] hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <p className="text-body mb-6">
              {tabContent[activeTab as keyof typeof tabContent].description}
            </p>

            <a href="#" className="inline-flex items-center gap-2 text-[#2563EB] font-medium hover:underline">
              Check tools
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative Star */}
            <div className="absolute -top-4 left-1/2 text-[#2563EB] text-2xl">✦</div>
            <div className="relative h-[350px] rounded-xl overflow-hidden">
              <Image
                src={tabContent[activeTab as keyof typeof tabContent].image}
                alt="Tab content"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;