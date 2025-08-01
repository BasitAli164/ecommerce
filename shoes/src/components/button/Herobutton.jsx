
export default function ButtonComp({btnText,bgColor}) {
  return (
    <button className={`px-12 py-4 rounded-full font-bold text-lg text-gray-400 hover:text-gray-300 cursor-pointer bg-amber-800 hover:bg-amber-900 transition duration-700 delay-100 ease-in-out`}>{btnText}</button>
  )
}
