import imgPerfil from "./assets/david.png"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from "react-scroll"


const Home = () =>{
    return(
        <div name="inicio" 
            className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-50">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row sm:mb-11">
                <div className="flex flex-col justify-center h-full sm:pt-20 ">
                    <h2 className="text-4xl sm:text-4xl font-bold text-white sm:mt-6">
                        Computer Engineer - Full Stack Developer
                    </h2>
                    <p className="text-white py-4 max-w-md">

                    </p>
                    <div>
                        <Link to="coding" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Coding...
                            <span className="group-hover:rotate-90 duration-500">
                                <MdOutlineKeyboardArrowRight size={25}
                                className="ml-1"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="md:mt-10">
                    <img src={imgPerfil} alt=""  className=" rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>
        </div> 
    )
}

export default Home;