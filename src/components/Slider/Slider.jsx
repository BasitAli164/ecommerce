import Link from "next/link"

const sliderMenuList=[
    {href:"/womenfashion",label:"Women's Fashion"},
    {href:"/menfashion",label:"Men's Fashion"},
    {href:"/electronics",label:"Electronics"},
    {href:"/home&lifestyle",label:"Home & Lifestyle"},
    {href:"/medicine",label:"Medicine"},
    {href:"/sports&Outdoor",label:"Sports & Outdoor"},
    {href:"/baby&toys",label:"Baby & Toys"},
    {href:"/groceries&pets",label:"Groceries & Pets"},
    {href:"/health&beauty",label:"Health & Beauty"},
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
