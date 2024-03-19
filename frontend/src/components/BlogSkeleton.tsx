export const BlogSkeleton = () =>{
    return (
    <div>
        <div className="pb-4 w-[250px] sm:w-screen md:max-w-screen-sm lg:max-w-screen-md mt-4 cursor-pointer animate-pulse ">
                <div className="flex mb-2 ">
                    <div className="flex items-center justify-center">   
                        <div className="size-8 rounded-full bg-gray-200 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4 ml-4"></div>
                    </div>
                </div>
                <div className="h-4 mb-4 bg-gray-200 rounded-full   w-full "></div>
                <div className="h-2 bg-gray-200 rounded-full  w-full mt-8 "></div>
                <div className="h-2 bg-gray-200 rounded-full w-[80px] mt-6  "></div>
        </div>
    </div>
)}

