import Rating from "../rating/Rating";
import Link from "next/link";

export default function Cart({ prodDetail, icons = [] }) {
  return (
    <div className="w-[270px] h-[350px] mt-2">
      <div className="w-[270px] h-[250px] bg-[#F5F5F5] flex flex-col justify-between items-center">
        <div className="w-full flex justify-between">
          {prodDetail.discount && (
            <div className="bg-bgBtn w-[55px] h-[26px] flex justify-center items-center mt-3 ml-3 rounded-sm text-secondaryText">
              {prodDetail.discount}
            </div>
          )}

          {/* Dynamic Icons */}
          <div className="flex flex-col justify-center items-center gap-1 mr-3 mt-3 ml-auto">
            {icons.map((IconComp, idx) => (
              <div
                key={idx}
                className="bg-[#fff] rounded-full flex justify-center items-center w-[34px] h-[34px]"
              >
                <IconComp className="size-5" />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${prodDetail.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="w-[200px] h-[200px] mb-5 bg-transparent flex justify-center items-center"
        ></div>

        {prodDetail.inStock ? (
          <Link
            href={""}
            className="w-full bg-[#000] text-center text-[#f5f5f5] p-1 text-lg"
          >
            Add To Cart
          </Link>
        ) : null}
      </div>

      <div>
        <p>{prodDetail.title}</p>
        <div className="flex gap-3">
          <span className="text-accent">{prodDetail.sPrice}</span>
          <span className="line-through text-[#000000] opacity-70">
            {prodDetail.oPrice}
          </span>
        </div>
        <div className="flex">
          <Rating value={prodDetail.ratingValue} />
          <span className="text-primaryText opacity-70">
            {prodDetail.totalRating}
          </span>
        </div>
      </div>
    </div>
  );
}
