import Image from "next/image"
import Link from "next/link"
import logo from '../../public/logo/logo.png'
const menulist=[
  {id:1,menuName:"Men",link:"/"},
  {id:2,menuName:"Women",link:"/product"},
  {id:3,menuName:"Sale",link:"/service"},
 
]

export default function Header() {

  return (
    <div>
        <div>
            <Image 
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            />
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
