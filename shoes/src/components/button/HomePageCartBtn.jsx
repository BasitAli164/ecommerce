import Link from "next/link"

export default function HomePageCartBtn({btnText}) {
  return (
    <Link href={'/'} className='px-8 py-3 bg-transparent text-white font-semibold uppercase border rounded-full '>{btnText}</Link>
  )
}
