
const NormalButton = ({label , styles , onClick} : {label : string , styles? : string , onClick? : () => void}) => {
  return (
    <button className={"text-textPrimary z-[2] font-semibold transition-all hover:bg-secondary hover:px-14 py-4 px-10 rounded-full bg-primary " + styles} onClick={onClick}>
        {label}
    </button>
  )
}

export default NormalButton