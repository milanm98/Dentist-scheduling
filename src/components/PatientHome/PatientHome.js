import { BrowserRouter, NavLink } from "react-router-dom"
import CancelExamPatient from "./CancelExamPatient";
import ScheduleExamPatient from "./ScheduleExamPatient";
import { Route, Switch } from "react-router-dom";

export default function PatientHome(){
    return(
        <div className="flex flex-row bg-green-100">
                <BrowserRouter>
                    <div className="text-left flex flex-col shadow-inner opacity-80 bg-gradient-to-r from-green-900 via-green-700 to-green-300 font-black p-3 h-screen w-1/5 text-white text-2xl">
                    <h1 className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2 text-center">PACIJENT</h1>
                    
                    <NavLink to="cancelExam" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2 text-center">
                        Otkazi termin 
                    </NavLink>

                    <NavLink to="scheduleExam" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2 text-center">
                        Zakazi novi termin
                    </NavLink>

                    </div>

                    <Switch>
                        <Route component={CancelExamPatient} path="/:jmbg/patient/cancelExam"></Route>
                        <Route component={ScheduleExamPatient} path="/:jmgb/patient/scheduleExam"></Route>
                    </Switch>
                </BrowserRouter>

        </div>
    )
}