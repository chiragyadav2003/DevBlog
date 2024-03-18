import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export interface blog{
    id:string,
    title:string,
    content:string
    publishedDate?:string
    author:{
        name:string,
        tagline?:string
    }
}

export const useBlogs = () =>{
    const[loading,setLoading] = useState(true)
    const[blogs,setBlogs] = useState<blog[]>([])
//NOTE: we can not use async function directly inside useEffect
    useEffect(()=>{
        async function getBlogs(){
            try {
                const token = localStorage.getItem('token')
                const headers = {
                    "Authorization":`Bearer ${token}`
                }
                const res = await axios.get(`${BACKEND_URL}/blog/bulk`, { headers:headers})
                const data =  res.data.posts
                setBlogs(data)
                setLoading(false)
            } catch (error) {
                //TODO: handle error better
                console.log("error ehicle accessing blogs")
                console.error(error)
            }
        }
        getBlogs()
    }, [])
    return {
        loading,blogs
    }
}

export const useBlog = ({id}:{id:string}) =>{
    const[loading,setLoading] = useState(true)
    const[blog,setBlog] = useState<blog>()
//NOTE: we can not use async function directly inside useEffect
    useEffect(()=>{
        async function getBlog(){
            try {
                const token = localStorage.getItem('token')
                const headers = {
                    "Authorization":`Bearer ${token}`
                }
                const res = await axios.get(`${BACKEND_URL}/blog/${id}`, { headers:headers})
                const data =  res.data.post
                setBlog(data)
                setLoading(false)
            } catch (error) {
                //TODO: handle error better
                console.log("error ehicle accessing blog")
                console.error(error)
            }
        }
        getBlog()
    }, [id])
    return {
        loading,blog
    }
}

