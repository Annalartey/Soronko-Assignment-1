import React from 'react';
import Home from './components/Home';
//import LoginForm from './components/LoginForm';
//import Signup from './components/Signup';
//import Home from './components/Home';
//import AddPage from './components/AddPage';
//import Menu from './components/Menu';
//import Add from './components/Add';
import './styles/tailwind.css'



function App(){
    return(
        <div className="w-full h-full bg-gray-100">
          <center>
            <h1 className="text-2xl text- py-10 font-bold ">THIS IS MY FIRST ASSIGNMENT</h1>
            <Home/>
          </center>

        </div>
    )
}

export default App;