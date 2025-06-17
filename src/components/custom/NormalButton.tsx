import { Loader } from "lucide-react"

const NormalButton = ({label , styles , onClick , loading} : {label : string , styles? : string , onClick? : () => void , loading? : boolean}) => {
  return (
    <button disabled={loading} className={"text-textPrimary z-[2] font-semibold transition-all hover:bg-secondary hover:px-14 py-4 px-10 rounded-full bg-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-gray-500 " + styles} onClick={onClick}>
        {loading ? <Loader className="animate-spin mx-auto" /> : label}
    </button>
  )
}

export default NormalButton