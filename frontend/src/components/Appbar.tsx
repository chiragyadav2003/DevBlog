import { Avatar } from "./Avatar"
import {Link} from "react-router-dom"
import {useState} from "react"
import { LogoutBtn } from "./LogoutBtn"


export const Appbar = ()=>{
    const [isOpen, setOpen] = useState(false);
  
    const handleDropDown = () => {
    setOpen(isOpen=>!isOpen);
    };
    return <div className=" z-20 flex justify-between border-b-2 border-slate-200 px-10 py-4">
        <Link to={"/"}>
            <div className="flex items-center font-semibold text-2xl">
                DevBlog
            </div>
        </Link>
        <div className="flex items-center justify-between">
            <Link to={'/publish'}>
                <button type="button" className="flex items-center focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-full text-sm px-5 py-2.5 mx-12 ">new</button>
            </Link>


        <div className="dropdown hover:scale-105  duration-100  ">
            <button
            className="text-whit size-12 rounded-full "
            onClick={handleDropDown}
            >
                <Avatar name={"Aman"} size={"big"}/>
            </button>

            <div
            id="dropdown"
            className={` fixed w-44 mt-1 mr-3 bg-white divide-y divide-gray-100 shadow ${
            isOpen ? "block" : "hidden"
            }`}
            >
                <ul className=" z-10  bg-white  divide-y divide-gray-100 shadow ">
                    <li
                    >
                        <LogoutBtn/>
                    </li>
                </ul>
            </div>
        </div>


        </div>
        </div>
}

