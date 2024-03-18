import { FullBlog } from "../components/FullBlog"
import { Appbar } from "../components/Appbar"
import { useParams } from 'react-router-dom';
import { useBlog } from "../hooks/hook";
import { Loader } from "../components/Loader";

export const Blog = () => {
    const { id } = useParams();
    console.log("id = ", id)
    console.log("id = ", typeof (id))
    const { loading, blog } = useBlog({ id: id||"" });
    console.log(loading, blog)

    if(loading || !blog) {
        return (
            <Loader/>
    )}

    return (
        <>
            <Appbar />
            <FullBlog blogOne={blog} />
        </>
    )
}
