import { NavLink } from "react-router-dom";
import BackgroundSrc from "../assets/homeBackground.jpg";

export default function Home(){
    return(    
        <div>
            <div className="w-full h-16 bg-gradient-to-r from-green-700 via-green-800 to-green-900 flex justify-center gap-24 relative">
            <NavLink className="text-white text-2xl md:text-5xl shadow-2xl font-sans font-mono pt-2" to="/register">Register</NavLink>
            <NavLink className="text-white text-2xl md:text-5xl shadow-2xl font-sans font-mono pt-2" to="/login">Login</NavLink>
            </div>
            <img className="w-screen h-screen absolute" src={BackgroundSrc} alt="background"></img>
        </div>
    )
}

