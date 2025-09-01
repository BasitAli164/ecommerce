import { Eye, Heart } from "lucide-react";
import Rating from "../rating/Rating";

export default function Cart({ prodDetail }) {
  console.log("Cart data from Cart component:", prodDetail);

  return (
    <div className="w-[270px] h-[350px] mt-2 ">
      <div className="w-[270px]  h-[250px]  bg-[#F5F5F5] flex  flex-col justify-between items-center">
        <div className="w-full flex justify-between ">
          {prodDetail.discount && (
            <div className="bg-[#DB4444] w-[55px] h-[26px] flex justify-center items-center mt-3 ml-3 rounded-sm">
              {prodDetail.discount}
            </div>
          )}
          <div className="flex flex-col justify-center items-center gap-1 mr-3 mt-3 ml-auto">
            <div className="bg-[#fff] rounded-full flex justify-center items-center w-[34px] h-[34px]">
              <Heart className="size-5" />
            </div>
            <div className="bg-[#fff] rounded-full flex justify-center items-center w-[34px] h-[34px]">
              <Eye className="size-5" />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${prodDetail.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-[200px] h-[200px]"
        ></div>
        {
          prodDetail.inStock ?(
            <button className="w-full bg-[#000] text-center text-[#f5f5f5] p-2 text-lg font-semibold " >Add To Cart</button>
          ):(
            <></>
          )
        }
      </div>
      <div>
          <p>{prodDetail.title}</p>
          <div className="flex gap-3">
            <span className="text-[#DB4444]">{prodDetail.sPrice}</span>
            <span className="line-through text-[#000000] opacity-70">{prodDetail.oPrice}</span>
          </div>
          <div className="flex">
            <Rating value={prodDetail.ratingValue}/>({prodDetail.totalRating})
          </div>
      </div>
    </div>
  );
}
