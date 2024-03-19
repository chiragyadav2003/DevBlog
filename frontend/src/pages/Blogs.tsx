import {BlogCard} from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks/hook"
import { BlogSkeleton } from "../components/BlogSkeleton"

export const Blogs = () =>{
    const {loading,blogs} = useBlogs()
    
    if(loading){
        return (<>
            <Appbar/>
            {/* <Loader/> */}
            <div className="flex flex-col justify-center items-center ">
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
            </div>
        </>
        )
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