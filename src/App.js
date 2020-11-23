import React from 'react';
//import AddPage from './components/AddPage';
//import Home from './components/Home';
//import LoginForm from './components/LoginForm';
//import Signup from './components/Signup';
//import Home from './components/Home';
//import Menu from './components/Menu';
//import Add from './components/Add';
import './styles/tailwind.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import Navbar from './components/Navbar';
//import Add from './components/Add';
//import AllPosts from './components/AllPosts';
//import NewPost from './components/NewPosts';
//import Home from './components/Home';
import AddPage from './components/AddPage';



function App(){
    return(
      <Router>
        <div className="w-full h-full bg-gray-100">
          <center>
            <h1 className="text-2xl text- py-10 font-bold ">THIS IS MY FIRST ASSIGNMENT</h1>
           <AddPage/>
          </center>

        </div>
        </Router>
    )
}

export default App;