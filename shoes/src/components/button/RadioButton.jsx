
const colors=['darkred','darkblue','darkgreen','gray','black',]


export default function RadioButton() {

  return (
    <>
    {
        colors.map((item,index)=>(
            <button key={index} className={`p-2.5 mx-0.5 rounded-full cursor-pointer `} style={{backgroundColor:item}} title={item}>            
    </button>
        ))
    }
    </>
  )
}
