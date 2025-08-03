
const colors=['red','blue','green','gray','aqua','brown']


export default function RadioButton() {

  return (
    <>
    {
        colors.map((item,index)=>(
            <button key={index} className={`px-1 py-1 rounded-full bg-[${item}]`}>            
    </button>
        ))
    }
    </>
  )
}
