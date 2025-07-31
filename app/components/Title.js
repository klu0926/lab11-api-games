
export default function Title({ title = "Title" }){
  return (
    <div className="w-full py-2 mt-10">
      <p className="text-6xl text-center font-bold text-white">
        {title}
      </p>
    </div>

  )
}