import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';


function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' Component={Login}></Route>
  <Route path='/signup' Component={Signup}></Route>
</Routes>
   
    </div>
  );
}

export default App;
