import HomePageCartBtn from "../button/HomePageCartBtn"

function HomePageCart({btnText,img,link ,hoverImage}) {
  return (
   <div className="w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] flex justify-center items-center rounded-full bg-amber-400" style={{backgroundImage:`url(${img})`, backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
    <HomePageCartBtn btnText={btnText} link={link}/>   
   </div>
  )
}

export default HomePageCart
