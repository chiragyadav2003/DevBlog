import { Link, useNavigate } from "react-router-dom";
import {SignupType} from "@devchirag/medium-common"
import { useState } from "react";
import axios  from "axios"
import { BACKEND_URL } from "../config";

export const Auth = ({type}:{type:"signup"|"signin"})=>{

    const [postInputs,setPostInputs] = useState<SignupType>({
        name:"",
        email:"",
        password:""
    })

    const navigate = useNavigate()

    async function sendRequest(){
        try {
            const res = await axios.post(`${BACKEND_URL}/user/${type==="signup"?"signup":"signin"}`, postInputs)
            const token = res.data.jwt
            localStorage.setItem('token',token)
            localStorage.setItem('loggedIn',"true")
            navigate("/blogs")
        } catch (error) {
            //TODO: alert user at request failed
            console.log("request sent error :",error)
        }
    }

    return <div className="h-screen flex flex-col justify-center ">
        {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center">
            <div>
                <div className=" flex flex-col items-center px-10 ">
                    <div className=" font-bold text-4xl mb-4">
                        Welcome to DevBlog
                    </div>
                    <div className=" font-semibold text-sm text-slate-500">
                        {type==="signup"?"Already have an account?":"Don't have an account ?"}
                        <Link 
                            className="pl-2 underline " 
                            to={type==="signup"?"/signin":"/signup"}
                            >{type==="signup"?"Signin":"Signup"}
                        </Link>
                    </div>
                </div>
                <div className="pt-8">
                    {type==="signup"?<LabelledInput 
                        label="Username" 
                        placeholder="Enter your username" 
                        onChange={(e)=>{setPostInputs((prevState)=>({...prevState, name : e.target.value}))}
                        //*destructure prevState and update name here
                    } /> :null}
                    <LabelledInput 
                        label="Email" 
                        placeholder="johndoe@gmail.com" 
                        onChange={(e)=>{setPostInputs((prevState)=>({...prevState, email : e.target.value}))}
                    } /> 
                    <LabelledInput 
                        label="Password"
                        type="password" 
                        placeholder="Enter your password" 
                        onChange={(e)=>{setPostInputs((prevState)=>({...prevState, password : e.target.value}))}
                    } />
                    <button type="button" onClick={sendRequest} className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 mt-8">{type==="signup"?"Sign Up":"Sign In"}
                    </button>

                </div>
            </div>
        </div>
    </div>
}



//NOTE: onchange is an event handler function, so define its type carefully
interface LabelledInputType {
    label:string;
    type?:string;
    placeholder:string; 
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void; //NOTE:important -defining "e":event handler type
}

function LabelledInput({label,placeholder,type, onChange}:LabelledInputType){
    return (
    <div className="pb-6">
        <label htmlFor={label} className="block mb-2 text-base font-semibold">{label}</label>
        <input onChange={onChange} type={type||"text"} id={label} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>)

}