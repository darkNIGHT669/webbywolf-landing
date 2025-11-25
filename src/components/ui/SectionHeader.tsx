import React from "react";

interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string;
  centered?: boolean;
  titleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  tagline,
  title,
  description,
  centered = false,
  titleClassName = "",
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}>
      {tagline && (
        <p className="tagline">{tagline}</p>
      )}
      <h2 className={`heading-lg text-[#1E293B] ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-body mt-4 ${centered ? "max-w-3xl mx-auto" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;