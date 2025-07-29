import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo.png";
import { HelpCircleIcon, ShoppingCartIcon, User } from "lucide-react";
const menulist = [
  { id: 1, menuName: "Home", link: "/" },
  { id: 2, menuName: "Product", link: "/product" },
  { id: 3, menuName: "Service", link: "/service" },
  { id: 4, menuName: "About", link: "/about" },
  { id: 5, menuName: "Contact", link: "/contact" },
];

export default function Header() {
  return (
    <div>
      <div>
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
      <div>
        {menulist.map(({ id, menuName, link }) => (
          <ul key={id}>
            <Link href={link}>{menuName}</Link>
          </ul>
        ))}
      </div>
      <div>
        <User size={25} color="white" />
        <HelpCircleIcon size={25} color="white" />
        <ShoppingCartIcon size={25} color="white" />
      </div>
    </div>
  );
}
