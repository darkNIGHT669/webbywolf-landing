import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { Phone } from "lucide-react";

const Section1 = () => {
  const features = [
    {
      image: "/images/feature-1.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Vestibulum ornare fermentum feugiat.",
    },
    {
      image: "/images/feature-2.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
    },
    {
      image: "/images/feature-3.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
    },
  ];

  return (
    <section className="w-full bg-white border-l-4 border-[#2563EB] overflow-hidden mt-12 md:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-16 py-12 lg:py-20">
          <p className="tagline italic">Lorem ipsum dolor sit</p>
          <h2 className="heading-lg text-[#1E293B] mb-4">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-body mb-8 max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. 
            Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at 
            felis aliquet. Hendrerit tellus at purus lectus.
          </p>

          {/* Feature List */}
          <div className="space-y-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-24 h-20 relative flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">{feature.title}</h4>
                  <p className="text-sm text-[#64748B]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <Button withArrow>Loerum Ipsum</Button>
            <div className="flex items-center gap-2 text-[#1E293B]">
              <Phone size={18} />
              <span className="font-medium">123456789</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] lg:h-[550px]">
          <Image
            src="/images/section1-bikes.jpg"
            alt="Motorcycle showroom"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;