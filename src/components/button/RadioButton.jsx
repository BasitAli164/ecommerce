import { shoeColors } from "@/lib/dammyData"

export default function RadioButton() {

  return (
    <>
    {
        shoeColors.map((item,index)=>(
            <button key={index} className={`p-2.5 mx-0.5 rounded-full cursor-pointer `} style={{backgroundColor:item}} title={item}>            
    </button>
        ))
    }
    </>
  )
}
