
interface BlogCardProps{
    authorName:string
    title:string;
    content:string;
    publishedDate:string;
}

export const BlogCard = ({authorName,title,content,publishedDate}:BlogCardProps)=>{
    return (
        <div className="flex flex-col items-center max-w-2xl ">
            <div className="border-b-2 border-slate-300 text-black p-4">
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
        </div>
    )
}

export function Avatar({name}:{name:string}){
    return <div className=" flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full">
    <span className="font-medium text-gray-600 ">{name[0]}</span>
</div>
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-300  "></div>
}