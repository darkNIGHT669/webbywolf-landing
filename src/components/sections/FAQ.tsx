"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer: "Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-[#F8FAFC] section-padding">
      <div className="section-container max-w-4xl">
        <h2 className="heading-lg text-[#1E293B] mb-12">
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left"
              >
                <span className="font-medium text-[#1E293B] pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="flex-shrink-0 text-[#1E293B]" size={20} />
                ) : (
                  <Plus className="flex-shrink-0 text-[#1E293B]" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-[#64748B]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;