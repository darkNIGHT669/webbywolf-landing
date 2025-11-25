import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum"],
    },
  ];

  return (
    <footer className="bg-[#1E293B] py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Logo */}
          <div className="md:w-1/5">
            <div className="bg-white text-[#1E293B] px-6 py-2 rounded-md font-bold text-lg inline-block">
              LOGO
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#334155]">
          <p className="text-[#94A3B8] text-sm text-center md:text-left">
            © 2025 Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;