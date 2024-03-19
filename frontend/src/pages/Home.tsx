import {Link} from "react-router-dom"
import { Visit } from "../components/Visit"

export const Home = () =>{
    return (
        <div className="leading-normal tracking-normal text-gray-900 font-sans  ">

            <div className="h-screen pb-14 bg-right bg-cover background-image:url('bg.svg');">
                <div className="w-full container mx-auto p-6">
                
                    <div className="w-full flex items-center justify-between">
                        <Link
                        to={"/"}
                        className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                            DevBlog 
                        </Link>
                        
                        <div className="flex w-1/2 justify-end content-center ">

                        <section className="flex justify-center items-center mx-4">
                            <button
                            onClick={()=>window.location.replace("https://github.com/chiragyadav2003")}
                            className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                        >
                                <svg
                                className="w-5"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                ></path>
                                </svg>
                                <span
                                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-500"
                                >
                                GitHub
                                </span>
                            </button>
                        </section>

                        <section className="flex justify-center items-center mx-4">
                            <button
                                onClick={()=>window.location.replace("https://www.linkedin.com/feed/")}
                                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                            >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1.1em"
                                    viewBox="0 0 512 512"
                                    stroke-width="0"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    >
                                    <path
                                        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                                    ></path>
                                    </svg>
                                    <span
                                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-500"
                                    >
                                    Linkedin
                                    </span>
                            </button>
                        </section>

                        </div>
                    </div>

                    {/* <!--Main--> */}
                    <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        
                        {/* <!--Left Col--> */}
                        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Welcome to DevBlog</h1>
                            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Unleash creativity, ignite conversations. Join us in a world where stories thrive!</p>
                        </div>

                        {
                            localStorage.getItem("loggedIn")==="true"?<Visit path={"/blogs"}/>:<Visit path={"/signin"}/>
                        }

                        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start">

                        </div>
                        
                        {/* <!--Footer--> */}
                        <div className="w-full pt-40 pb-6 text-sm text-center md:text-left fade-in">
                            <a className="text-gray-500 no-underline hover:no-underline" href="/">&copy; DevBlog 2024</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}