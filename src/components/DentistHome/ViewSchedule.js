import axios from "axios"
import { useEffect, useState } from "react"
import { VIEW_SCHEDULE } from "../../API";

export default function ViewSchedule(){

    const [exams, setExams] = useState([]);

    useEffect(() => {
        axios.get(VIEW_SCHEDULE,{
            headers: {
               'content-type': 'application/json',
            },
            
          }).then(res => {
              if(res.status === 200){
                setExams(res.data);
                console.log(res.data);
              }
            }
          )
    })


    if(exams.length === 0){
        return(
            <div className="flex w-full h-screen justify-center items-center text-center bg-green-100  text-black text-4xl flex flex-col">
                Trenutno nema zakazanih termina
            </div>
        )
    } else {
        return(
            exams.map(el => <div className="text-black text-4xl">el</div>)
        )
    }

}