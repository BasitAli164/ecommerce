import Link from 'next/link'
import React from 'react'

export default function Button({btnText,btnPx, btnPy, btnLink , bgColor,textColor,btnBorder}) {
  return (
    <Link
     href={btnLink}
     style={{ padding: `${btnPy}px ${btnPx}px`, backgroundColor:`${bgColor}` , color:`${textColor} ` , border:`${btnBorder}px` ,borderStyle:"solid" }}
     className={`  text-center rounded-sm  `}>{btnText}</Link>
  )
}
