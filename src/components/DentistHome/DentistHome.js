import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom"
import ViewSchedule from "./ViewSchedule";
import ScheduleExamDentist from "./ScheduleExamDentist";
import CancelExamDentist from "./CancelExamDentist";

export default function DentistHome(){
    return(

        <div className="flex flex-row bg-green-100">
        <BrowserRouter>


            <div className="text-left flex flex-col shadow-inner opacity-80 bg-gradient-to-r from-green-900 via-green-700 to-green-300 font-black p-3 h-screen w-1/5 text-white text-2xl">
            <h1 className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2 text-center">ZUBAR</h1>
        
            <NavLink to="cancelExam" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2 text-center">
                Otkazi termin
            </NavLink>

            <NavLink to="scheduleExam" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2 text-center">
                Zakazi novi termin
            </NavLink>

            <NavLink to="reviewExam" 
            className="mt-6 transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2 text-center">
                Pregledaj sve termine
            </NavLink>
            </div>

            <Switch>
                <Route component={ViewSchedule} path="/:jmbg/dentist/reviewExam"></Route>
                <Route component={ScheduleExamDentist} path="/:jmbg/dentist/scheduleExam"></Route>
                <Route component={CancelExamDentist} path="/:jmbg/dentist/cancelExam"></Route>
            </Switch>

        </BrowserRouter>

        </div>

        
       
    )
}