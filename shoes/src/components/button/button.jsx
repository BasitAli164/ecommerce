
export default function button({btnText,bgColor}) {
  return (
    <button className={`px-8 py-4 rounded-full ${bgColor}`}>{btnText}</button>
  )
}
