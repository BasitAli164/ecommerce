
const colors=['red','blue','green','gray','aqua',]


export default function RadioButton() {

  return (
    <>
    {
        colors.map((item,index)=>(
            <button key={index} className={`px-2 py-2 mx-0.5 rounded-full `} style={{backgroundColor:item}}>            
    </button>
        ))
    }
    </>
  )
}
