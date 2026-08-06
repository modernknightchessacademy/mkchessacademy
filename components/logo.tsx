import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light";
}

export const ModernKnightLogo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = "md",
  variant = "dark",
}) => {
  const dimensions = {
    xs: { logoSize: "w-8 h-8", textSize: "text-xs", subSize: "text-[8px]" },
    sm: { logoSize: "w-10 h-10", textSize: "text-base", subSize: "text-[10px]" },
    md: { logoSize: "w-14 h-14", textSize: "text-lg", subSize: "text-xs" },
    lg: { logoSize: "w-20 h-20", textSize: "text-2xl", subSize: "text-sm" },
    xl: { logoSize: "w-28 h-28", textSize: "text-3xl", subSize: "text-base" },
  }[size];

  const modernColor = variant === "light" ? "text-white" : "text-slate-900 dark:text-white";
  const knightColor = variant === "light" ? "text-sky-400" : "text-[#0B4398] dark:text-sky-400";

  return (
    <div className={`flex items-center gap-3 font-sans ${className}`}>
      {/* Official Image Logo */}
      <div className={`relative shrink-0 ${dimensions.logoSize} drop-shadow-md rounded-full overflow-hidden`}>
        <img
          src="/logo.jpg"
          alt="Modern Knight Chess Academy"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <span className={`font-black tracking-tight ${modernColor} ${dimensions.textSize}`}>
            MODERN <span className={knightColor}>KNIGHT</span>
          </span>
          <span className={`font-bold tracking-widest text-[#E11D48] ${dimensions.subSize}`}>
            CHESS ACADEMY
          </span>
        </div>
      )}
    </div>
  );
};

export default ModernKnightLogo;
