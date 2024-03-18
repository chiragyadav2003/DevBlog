import {Avatar} from "./Avatar"
import {blog} from "../hooks/hook"


export const FullBlog = ({blogOne}:{blogOne:blog}) =>{
    console.log("blogone", blogOne)
    return <div className="grid grid-cols-3 h-screen ">
        <div className=" col-span-2 p-10">
            <div className=" font-extrabold text-5xl pb-3 leading-12 ">{blogOne.title} </div>
            <div className="text-gray-400 font-normal pb-3 ">Posted on {blogOne?.publishedDate||"August24, 2023"}</div>
            <div className="text-md leading-7">{blogOne.content}
            </div>
        </div>
        <div className="col-span-1">
            <div className="p-10">
                <div className="pb-4 pt-8 font-medium">
                    Author
                </div>
                <div className="grid grid-cols-8 items-center pr-4">
                    <div className="col-span-1 ">
                        <Avatar name={blogOne.author?.name||"Chirag"} />
                    </div>
                    <div className="col-span-7">
                        <div className="font-bold text-xl pb-1">
                        {blogOne.author?.name||"Chirag Yadav"}
                        </div>
                        <div className="text-gray-400 font-normal">
                        {blogOne.author?.tagline||"Engineering student and future aspiring developer"}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}