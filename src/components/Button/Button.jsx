import Link from 'next/link'
import React from 'react'

export default function Button({btnText,btnPx, btnPy, btnLink}) {
  return (
    <Link href={btnLink} className={`bg-bgBtn px-${btnPx} py-${btnPy} text-center rounded-sm  text-secondaryText`}>{btnText}</Link>
  )
}
