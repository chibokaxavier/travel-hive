import Image from "next/image";
import React from "react";

interface ButttonProps {
  type: "button" | "submit";
  title: string;
  variant: string;
  icon?: string;
  full?: boolean;
}

const Button = ({ type, title, variant, icon, full }: ButttonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      } `}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
