import axios from "axios";
import { useState } from "react"
import { SCHEDULE } from "../../API";

export default function ScheduleExamDentist(){

    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const data = {
        "date" : date,
        "time" : time
        //jmbg : jmbg iz jwt tokena ili iz usera svejedno...
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleTime = (e) => {
        setTime(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(SCHEDULE, data, {
            headers: {
               'content-type': 'application/json',
            },
            }).then(res => {
                if(res.status === 200){
                  console.log("Uspesno zakazan pregled");            
                }
            })  
    }

    return(
        <div className="flex w-full h-screen justify-center items-center text-center bg-green-100  text-black text-4xl flex flex-col gap-12">
            <input onChange={handleDate} type="date"></input>
            <input onChange={handleTime} type="time"></input>
            <button onClick={handleSubmit} className="bg-green-100 p-5 border-4 border-black shadow-2xl" type="button">Proveri da li je termin dostupan</button>
        </div>
    )
}