import React from "react";
import Image from "next/image";

const AppDownload = () => {
  return (
    <section className="w-full bg-[#F8FAFC] section-padding">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <p className="tagline">Lorem Ipsum</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="text-body mb-8 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse 
              convallis. Urna a urna lectus donec felis risus dui pellentesque. Pellentesque 
              ultricies ipsum.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-block">
                <Image
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-12 w-auto"
                /> 
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/images/app-store.png"
                  alt="Download on App Store"
                  width={140}
                  height={42}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-96 h-96">
              <Image
                src="/images/phone-mockup1.jpg"
                alt="App mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;