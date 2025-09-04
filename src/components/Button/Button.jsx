import Link from 'next/link'
import React from 'react'

export default function Button({btnText,btnPx, btnPy, btnLink , bgColor}) {
  return (
    <Link
     href={btnLink}
     style={{ padding: `${btnPy}px ${btnPx}px`, backgroundColor:`${bgColor}` }}
     className={`  text-center rounded-sm  text-secondaryText`}>{btnText}</Link>
  )
}
