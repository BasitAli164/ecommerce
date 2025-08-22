import Link from "next/link";
import React from "react";

export default function AnnouncementBar() {
  return (
    <section className="w-full  sm:h-[48px] bg-bgPrimary ">
      <div className="container max-w-[1400px] h-full flex flex-col sm:flex-row justify-around items-center gap-y-0.5 px-4 ">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2">
          <p className="font-poppins text-secondaryText  text-sm md:text-base text-center ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
            <Link className="underline text-secondaryText font-semibold text-sm md:text-base" href={"#"}>ShopNow</Link>
         
        </div>
        <div className=" hidden sm:flex flex-col justify-center items-center gap-y-4">
          <select name="language" id="language" className="text-secondaryText  outline-none rounded py-2 px-3 md:pr-4">
            <option value="en-US" className="text-primaryText text-sm">English (US)</option>
            <option value="en-GB" className="text-primaryText text-sm">English (UK)</option>
            <option value="en-CA" className="text-primaryText text-sm">English (CA)</option>
            <option value="en-AU" className="text-primaryText text-sm">English (AU)</option>
            <option value="en-NZ" className="text-primaryText text-sm">English (NZ)</option>
          </select>
        </div>
      </div>
    </section>
  );
}
