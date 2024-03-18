import { Avatar } from "./Avatar"
import {Link} from "react-router-dom"

export const Appbar = ()=>{
    return <div className=" flex justify-between border-b-2 border-slate-200 px-10 py-4">
        <Link to={"/blogs"}>
            <div className="flex items-center font-semibold text-2xl">
                DevBlog
            </div>
        </Link>
        <div className="flex items-center justify-between">
            <Link to={'/publish'}>
                <button type="button" className="flex items-center focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-full text-sm px-5 py-2.5 mx-12 ">new</button>
            </Link>
            <div className="flex items-center font-semibold text-xl">
                <Avatar name={"Aman"} size={"big"}/>
            </div>
        </div>
        
    </div>
}