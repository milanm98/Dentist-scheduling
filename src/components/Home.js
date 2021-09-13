import { NavLink } from "react-router-dom";
import BackgroundSrc from "../assets/homeBackground.jpg";

export default function Home(){
    return(    
        <div>
            <div className="w-full h-16 bg-gradient-to-r from-green-700 via-green-800 to-green-900 flex justify-center gap-24 relative">
            <NavLink className="text-white text-2xl md:text-5xl shadow-2xl font-sans font-mono pt-2" to="/register">Register</NavLink>
            <NavLink className="text-white text-2xl md:text-5xl shadow-2xl font-sans font-mono pt-2" to="/login">Login</NavLink>
            </div>
            <div className="absolute z-10 w-screen h-screen justify-center items-center flex flex-col gap-12 text-green-900 text-4xl font-black">
                <p className="bg-green-100 p-5">Ne dozvoli da ti zubi budu iste boje kao pozadina ove stranice !</p>
                <NavLink className="bg-green-100 p-5 border-4 border-black shadow-2xl" to="register">ZAKAZI PREGLED</NavLink>
            </div>
            <img className="w-screen h-screen absolute" src={BackgroundSrc} alt="background"></img>
        </div>
    )
}

