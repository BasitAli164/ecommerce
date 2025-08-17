import Link from "next/link"

const sliderMenuList=[
    {href:"/womenfashion",label:"Women's Fashion"},
    {href:"/menfashion",label:"Men's Fashion"},
    {href:"/electronics",label:"Electronics"},
    {href:"/home",label:"Home & Lifestyle"},
]

export default function Slider() {
  return (
    <div>
      {
        links.map((item)=>(
            <p>
                <Link></Link>
            </p>
        ))
      }
    </div>
  )
}
