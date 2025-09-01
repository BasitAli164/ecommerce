import { Eye, Heart } from "lucide-react";

export default function Cart({ prodDetail }) {
  console.log("Cart data from Cart component:", prodDetail);

  return (
    <div className="w-[270px] h-[350px] mt-2 border-2 border-s-lime-500 border-solid ">
      <div className="w-[270px]  h-[250px] border-b-2 border-amber-800 bg-[#F5F5F5] flex  flex-col justify-between items-center">
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
      </div>
      <div></div>
    </div>
  );
}
