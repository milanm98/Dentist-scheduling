import './App.css';
import Home from "./components/Home";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from "./components/Login";

function App() {
  return (
    <main>
       <BrowserRouter>
          <Switch> 
            <Route component={Home} path="/" exact></Route>
            <Route component={Register} path="/register"></Route>
            <Route component={Login} path="/login"></Route>
          </Switch>
      </BrowserRouter>
    </main>

  );
}

export default App;
