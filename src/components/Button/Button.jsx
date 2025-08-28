import Link from 'next/link'
import React from 'react'

export default function Button({btnText,btnPx, btnPy, btnLink}) {
  return (
    <Link
     href={btnLink}
     style={{ padding: `${btnPy}px ${btnPx}px` }}
     className={`bg-bgBtn  text-center rounded-sm  text-secondaryText`}>{btnText}</Link>
  )
}
