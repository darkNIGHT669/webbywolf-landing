"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeFrame: "",
    size: "",
    quantity: "",
    project: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full bg-white section-padding">
      <div className="section-container max-w-4xl">
        <h2 className="heading-lg text-[#1E293B] text-center mb-12">
          REQUEST A QUOTE
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-2">Time Frame*</label>
              <select
                name="timeFrame"
                value={formData.timeFrame}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] appearance-none cursor-pointer"
              >
                <option value="">Choose Time Frame</option>
                <option value="1-week">1 Week</option>
                <option value="2-weeks">2 Weeks</option>
                <option value="1-month">1 Month</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-2">Size*</label>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] appearance-none cursor-pointer"
              >
                <option value="">Choose Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-2">Quantity*</label>
              <select
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] appearance-none cursor-pointer"
              >
                <option value="">Choose Quantity</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-100">51-100</option>
                <option value="100+">100+</option>
              </select>
            </div>
          </div>

          {/* Row 4 - Textarea */}
          <div>
            <label className="block text-sm font-medium text-[#1E293B] mb-2">Please Describe Your Project*</label>
            <textarea
              name="project"
              value={formData.project}
              onChange={handleChange}
              rows={5}
              placeholder="Choose a project type"
              className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none"
            />
          </div>

          {/* Terms */}
          <p className="text-sm text-[#64748B] text-center">
            By submitting this form you agree to our{" "}
            <a href="#" className="text-[#1E293B] underline">Terms of Service</a> and{" "}
            <a href="#" className="text-[#1E293B] underline">Privacy Policy</a>.
          </p>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button withArrow>Loerum Ipsum</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestQuote;