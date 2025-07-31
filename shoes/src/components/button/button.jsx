
export default function ButtonComp({btnText,bgColor}) {
    console.log("bgcol")
  return (
    <button className={`px-12 py-4 rounded-full font-bold text-lg cursor-pointer bg-[${bgColor}]`}>{btnText}</button>
  )
}
