import './App.css';
import Home from "./components/Home";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from "./components/Login";

import PatientHome from './components/PatientHome/PatientHome';

import DentistHome from './components/DentistHome/DentistHome';
import ViewSchedule from './components/DentistHome/ViewSchedule';
import ScheduleExamDentist from "./components/DentistHome/ScheduleExamDentist";
import CancelExamDentist from "./components/DentistHome/CancelExamDentist";

function App() {
  return (
    <main>
       <BrowserRouter>
          <Switch> 
            
            <Route component={Home} path="/" exact></Route>
            <Route component={Register} path="/register"></Route>
            <Route component={Login} path="/login"></Route>

            <Route component={DentistHome} path="/:jmbg/dentist/"></Route>
            <Route component={ViewSchedule} path="/:jmbg/dentist/reviewExam"></Route>
            <Route component={ScheduleExamDentist} path="/:jmbg/dentist/scheduleExam"></Route>
            <Route component={CancelExamDentist} path="/:jmbg/dentist/cancelExam"></Route>

            <Route component={PatientHome} path="/:jmbg/patient/"></Route>

          </Switch>
      </BrowserRouter>
    </main>

  );
}

export default App;
