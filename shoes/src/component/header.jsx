import Link from "next/link"

export default function Header() {
const menulist=[
  {id:1,menuName:"Home",link:"/"},
  {id:2,menuName:"Product",link:"/product"},
  {id:3,menuName:"Service",link:"/service"},
  {id:4,menuName:"About",link:"/about"},
  {id:5,menuName:"Contact",link:"/contact"},
]
  return (
    <div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            {
                menulist.map(({id,menuName,link})=>(
                    <ul key={id}>
                        <Link href={link}>{menuName}</Link>
                    </ul>
                ))
            }
        </div>

      
    </div>
  )
}
