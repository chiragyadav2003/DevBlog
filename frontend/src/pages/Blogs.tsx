import {BlogCard} from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks/hook"
import { Loader } from "../components/Loader" 

export const Blogs = () =>{
    const {loading,blogs} = useBlogs()
    
    if(loading){
        return <Loader/>
    }


    return <div>
        <Appbar/>
        <div className="flex flex-col justify-center items-center ">
            {
                blogs.map((blog)=>{
                    return <BlogCard
                    key={blog.id}
                    id={blog.id}
                    authorName={blog.author.name!==null?blog.author.name:"Chirag Yadav"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate="Mar15,2023"
                    />
                })
            }    
        </div>
    </div>
}