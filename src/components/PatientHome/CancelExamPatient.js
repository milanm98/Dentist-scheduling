import { useState, useEffect } from "react";
import { VIEW_SCHEDULE } from "../../API";
import axios from "axios";

export default function CancelExam(){



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
                Trenutno nemate termina za otkazivanje
            </div>
        )
    } else{
        return(
            exams.map(el => <div className="bg-green-100 text-black">Uspesno ste otkazali termin koji je bio zakazan za <span>el.date</span></div>)
        )
    }
}