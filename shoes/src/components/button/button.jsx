
export default function ButtonComp({btnText,bgColor}) {
  return (
    <button className={`px-8 py-4 rounded-full font-bold text-lg ${bgColor}`}>{btnText}</button>
  )
}
