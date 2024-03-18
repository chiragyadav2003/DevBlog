import { useNavigate } from "react-router-dom";
import { Appbar } from '../components/Appbar';
import { useState } from "react";
import axios from "axios"
import { BACKEND_URL } from "../config";

interface post{
    title:string,
    content:string
}

export const Publish = () =>{
    const navigate = useNavigate()
    const [post,setPost] = useState<post>({title:"",content:""})
    console.log("post and content :", post)

    //TODO: after saving and publish, redirect user to their created blog sections of their account
    //TODO:update blog

    const token = localStorage.getItem('token')
    const headers = {
        "Authorization":`Bearer ${token}`,
        'Content-Type': 'application/json'
    }

    async function savePost(){
        try {
            if(!post?.title || !post?.content){
                return console.log("enter required info")
            }
            const postData = JSON.stringify({
                title : post.title,
                content : post.content
            })
    
            const res = await axios.post(`${BACKEND_URL}/blog`,postData,{
                headers:headers
            })
            console.log(res.data)
            navigate(`/blog/${res.data.id}`)
        } catch (error) {
            return console.log("error while creatimg post")
        }
    }

    async function saveAndPublishPost(){
        try {
            if(!post?.title || !post?.content){
                return console.log("enter required info")
            }
            const postData = JSON.stringify({
                title : post.title,
                content : post.content,
                published:true
            })
    
            const res = await axios.post(`${BACKEND_URL}/blog`,postData,{
                headers:headers
            })
            console.log(res.data)
            navigate(`/blog/${res.data.id}`)
        } catch (error) {
            return console.log("error while creatimg post")
        }
    }


    return<div>
        <Appbar/>
        <div >
            {/* title */}
            <div className="  justify-center px-10 py-4">
                <div className="mx-8">
                    <input type="text" id="large-input" className="block w-full p-6 text-gray-900 border font-semibold border-gray-100 rounded-lg  bg-gray-50 text-3xl" placeholder="Title"
                    onChange={(e)=>{setPost((prevPost)=>({...prevPost,title:e.target.value}))}}
                    />
                </div>
            </div>
            {/* content */}
            <div className="grid items-center mt-4 grid-cols-4 px-10">
                <div className="mx-8 col-span-4">
                    <textarea id="message" rows={15}  className="block  w-full text-lg p-6 text-gray-900 font-medium bg-gray-50 rounded-lg border border-gray-100 " placeholder="Write your story here..."
                    onChange={(e)=>{setPost((prevPost)=>({...prevPost,content:e.target.value}))}}
                    ></textarea>
                </div>
            </div>
            {/* publish and save info */}
            <div className="flex justify-around mt-8  ">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg"
                    onClick={savePost}
                    >
                    Save
                    </button>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg"
                    onClick={saveAndPublishPost}
                    >
                    Save and Publish
                    </button>
            </div>
        </div>
        
    </div>
}