import HomePageCartBtn from "../button/HomePageCartBtn"

function HomePageCart({btnText,img}) {
  return (
   <div className="w-72 h-96 flex justify-center items-center rounded-2xl bg-amber-400" style={{backgroundImage:`url(${img})`, backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
    <HomePageCartBtn btnText={btnText}/>   
   </div>
  )
}

export default HomePageCart
