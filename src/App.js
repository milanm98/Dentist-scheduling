import './App.css';
import Home from "./components/Home";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from "./components/Login";
import PatientHome from './components/PatientHome/PatientHome';
import DentistHome from './components/DentistHome/DentistHome';

function App() {
  return (
    <main>
       <BrowserRouter>
          <Switch> 
            
            <Route component={Home} path="/" exact></Route>
            <Route component={Register} path="/register"></Route>
            <Route component={Login} path="/login"></Route>
            <Route component={DentistHome} path="/:jmbg/dentist/"></Route>
            <Route component={PatientHome} path="/:jmbg/patient/"></Route>

          </Switch>
      </BrowserRouter>
    </main>

  );
}

export default App;
