import Link from "next/link";
import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="w-full h-[48px] bg-[#000] text-white">
      <div className="flex">
        <div>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href={"#"}>ShopNow</Link>
        </div>
        <div>
          <select name="language" id="language">
            <option value="en-US">English (United States)</option>
            <option value="en-GB">English (United Kingdom)</option>
            <option value="en-CA">English (Canada)</option>
            <option value="en-AU">English (Australia)</option>
            <option value="en-NZ">English (New Zeeland)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
