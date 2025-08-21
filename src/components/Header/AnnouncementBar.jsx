import Link from "next/link";
import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="w-full h-[48px] py-2 bg-bgPrimary ">
      <div className="container max-w-[1400px] flex justify-around items-center">
        <div className="flex gap-x-4">
          <p className="font-poppins text-secondaryText">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
            <Link className="underline text-secondaryText font-semibold" href={"#"}>ShopNow</Link>
         
        </div>
        <div>
          <select name="language" id="language" className="text-secondaryText outline-none">
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
