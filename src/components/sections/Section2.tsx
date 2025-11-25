import React from "react";
import Image from "next/image";
import { RotateCcw } from "lucide-react";

const Section2 = () => {
  const features = [
    {
      title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
  ];

  return (
    <section className="w-full bg-white section-padding relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
        <div className="w-full h-full border-l-2 border-b-2 border-gray-300 transform -rotate-45"></div>
      </div>

      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <p className="tagline">Lorem ipsum dolor sit amet</p>
            <h2 className="heading-lg text-[#1E293B] mb-4">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
            </h2>
            <p className="text-body mb-8 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend 
              condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra 
              erat lacus suspendisse ornare.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <RotateCcw className="text-orange-500" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B] mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#64748B]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/section2-people.jpg"
                alt="Two professionals talking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Blue Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#2563EB]"></div>
    </section>
  );
};

export default Section2;