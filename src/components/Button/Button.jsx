import Link from "next/link";
import React from "react";

export default function Button({
  btnText,
  btnPx,
  btnPy,
  btnLink,
  bgColor,
  textColor,
  btnBorder,
  icon: Icon, // icon component
}) {
  return (
    <Link
      href={btnLink}
      style={{
        padding: `${btnPy}px ${btnPx}px`,
        backgroundColor: bgColor,
        color: textColor,
        border: `${btnBorder}px solid`,
      }}
      className="inline-flex items-center justify-center gap-2 rounded-sm text-center"
    >
      {Icon && <Icon className="w-5 h-5" />} 
      {btnText}
    </Link>
  );
}
