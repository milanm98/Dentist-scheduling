import { LOGIN } from "../API";
import BackgroundSrc from "../assets/homeBackground.jpg";
import axios from "axios";
import { useState } from "react";

export default function Login(){


    const [jmbg,setJmbg] = useState("");

    const handleJmbg = (e) => {
        setJmbg(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(LOGIN, jmbg, {
        headers: {
           'content-type': 'application/json',
        },
        }).then(res => {
            if(res.status === 200){
              console.log("Uspesna registracija");             
            }
        })
    }


    return(
        <div>
            <div className="absolute w-screen h-screen flex justify-center items-center shadow-2xl z-10 gap-24 flex-col text-2xl md:text-5xl font-sans font-black text-center">
                <input onChange={handleJmbg} className="border-8 border-white text-center" type="text" placeholder="unesite ovde svoj jmbg" required></input>
                <button onClick={handleSubmit} className="border-4 border-black bg-green-100 pl-6 pr-6 leading-loose " type="button">Potvrdi</button>
            </div>
            <img className="w-screen h-screen relative z-0" src={BackgroundSrc} alt="background"></img>
        </div>

    )
}