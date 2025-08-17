import Link from "next/link";
import { usePathname } from "next/navigation";

const sliderMenuList = [
  { href: "/womenfashion", label: "Women's Fashion" },
  { href: "/menfashion", label: "Men's Fashion" },
  { href: "/electronics", label: "Electronics" },
  { href: "/home&lifestyle", label: "Home & Lifestyle" },
  { href: "/medicine", label: "Medicine" },
  { href: "/sports&Outdoor", label: "Sports & Outdoor" },
  { href: "/baby&toys", label: "Baby & Toys" },
  { href: "/groceries&pets", label: "Groceries & Pets" },
  { href: "/health&beauty", label: "Health & Beauty" },
];

export default function Slider() {
  const pathname = usePathname();
  return (
    <div className="w-24 md:w-40 border-r-2 border-solid border-gray-200 p-2 md:p-5">
      {sliderMenuList.map((item) => (
        <p className="text-[10px] md:text-sm mt-2">
          <Link
            className={
              pathname === item.href
                ? "border-b border-gray-200 border-solid"
                : ""
            }
            href={item.href}
          >
            {item.label}
          </Link>
        </p>
      ))}
    </div>
  );
}
