import { useNavigate } from "react-router-dom"

export const Visit = ({path}:{path:string}) =>{
    const navigate = useNavigate()
    return (
    <div className="flex justify-center items-center">
        <button
            onClick={()=>{navigate(`${path}`)}}
            className="w-[150px] bg-grey-300 text-indigo-800 h-[50px] my-3 flex items-center justify-center rounded-xl font-semibold cursor-pointer text-lg relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 hover:text-[#fff]">
        Visit
        </button>
    </div>
)}           

