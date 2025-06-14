
export default function ButtonComp({btnText,bgColor}) {
  return (
    <button className={`px-7 py-3 rounded-full font-semibold text-md text-gray-400 hover:text-gray-300 cursor-pointer bg-amber-800 hover:bg-amber-900 transition duration-700 delay-100 ease-in-out`}>{btnText}</button>
  )
}
