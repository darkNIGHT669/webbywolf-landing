"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { ChevronRight } from "lucide-react";

const AccordionSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.",
      progress: 100,
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse tormentum velit.",
      progress: 60,
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.",
      progress: 30,
    },
  ];

  return (
    <section className="w-full bg-white section-padding border-l-4 border-[#2563EB]">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="heading-lg text-[#2563EB] mb-4">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
            </h2>
            <p className="text-body mb-8">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet 
              urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat 
              mauris.
            </p>
            <Button withArrow className="mb-8">Loerum Ipsum</Button>

            {/* Accordion Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`bg-white border-l-4 ${
                    activeStep === index ? "border-[#2563EB]" : "border-gray-200"
                  } rounded-lg shadow-md p-4 cursor-pointer transition-all`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-[#1E293B]">{step.title}</h4>
                    <ChevronRight
                      className={`text-orange-500 transition-transform ${
                        activeStep === index ? "rotate-90" : ""
                      }`}
                      size={20}
                    />
                  </div>
                  {activeStep === index && (
                    <div className="mt-3">
                      <p className="text-sm text-[#64748B] mb-3">{step.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${step.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/accordion-scooter.jpg"
                alt="Man with scooter"
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

export default AccordionSteps;