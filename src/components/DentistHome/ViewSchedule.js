import axios from "axios"
import { useEffect, useState } from "react"
import { VIEW_SCHEDULE } from "../../API";
import Calendar from "react-calendar";


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
            <div className="w-full h-screen flex justify-center items-center text-4xl">
                <Calendar></Calendar>
            </div>
        )
    } else {
        return(
            exams.map(el => <div className="text-black text-4xl">el</div>)
        )
    }

}