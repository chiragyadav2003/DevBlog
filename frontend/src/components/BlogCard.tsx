import {Link} from "react-router-dom"
import {Avatar} from "./Avatar"

interface BlogCardProps{
    authorName:string
    title:string;
    content:string;
    publishedDate:string;
    id:string
}

export const BlogCard = ({authorName,title,content,publishedDate,id}:BlogCardProps)=>{
    return (
            <Link to={`/blog/${id}`}>
                <div className="border-b-2 border-slate-300 text-black pb-4 w-[250px] sm:w-screen md:max-w-screen-sm lg:max-w-screen-md mt-4 cursor-pointer  ">
                <div className="flex mb-2 ">
                    <div className="flex items-center justify-center">   
                        <Avatar name={authorName} />
                    </div>
                    <div className="flex items-center justify-center font-semibold pl-1">
                        {authorName}
                    </div>
                    <div className="flex items-center justify-center text-gray-500 pl-2 ">
                        <Circle/>
                    </div>
                    <div className="flex items-center justify-center text-gray-500 pl-1">
                        {publishedDate}
                    </div>
                    </div>
                    <div className="text-2xl font-bold mb-2">
                        {title}
                    </div>
                    <div className="text-md font-thin ">
                        {content.length>100?`${content.slice(0,100)} ..............`:content}
                    </div>
                    <div className="pt-4 text-gray-400 font-thin">
                        {Math.ceil(content.length/100)} min read
                    </div>
                </div>
            </Link>
    )
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-300  "></div>
}