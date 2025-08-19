import { HeartIcon, SearchIcon, ShoppingCart } from 'lucide-react'
const menuList=[
    {href:"/",lable:"Home"},
    {href:"/contact",lable:"Contact"},
    {href:"/about",lable:"About"},
    {href:"/signup",lable:"Sign Up"},
]
export default function Navbar() {
    
  return (
    <nav>
        <div>
            <div>
                <h1>Exclusive</h1>
            </div>
            <div>
                <div>
                    <input type="text" name="" id="" />
                    <SearchIcon/>
                </div>
                <div>
                    <ShoppingCart/>
                    <HeartIcon/>

                </div>
            </div>
        </div>
        <div>
            <ul>
                {
                    menuList
                }
            </ul>
        </div>
      
    </nav>
  )
}
