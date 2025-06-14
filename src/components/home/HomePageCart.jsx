import HomePageCartBtn from "./HomePageCartBtn";

function HomePageCart({ btnText, img, link }) {
  return (
    <div
      className="w-[250px] sm:w-[275px] h-[250px] sm:h-[275px] flex justify-center items-center rounded-full bg-amber-400 "
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HomePageCartBtn btnText={btnText} link={link} />
    </div>
  );
}

export default HomePageCart;
