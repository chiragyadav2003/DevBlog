import { Avatar } from "./Avatar"

export const Appbar = ()=>{
    return <div className=" flex justify-between border-b-2 border-slate-200 px-10 py-4">
        <div className="flex items-center font-semibold text-2xl">
            DevBlog
        </div>
        <div className="flex items-center font-semibold text-xl">
            <Avatar name={"Aman"} size={"big"}/>
        </div>
    </div>
}