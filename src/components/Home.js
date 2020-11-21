import React from 'react';
import AllPosts from './AllPosts';
import NewPosts from './NewPosts';
//import Menu from './Menu';
import Sponsors from './Sponsors';
import Contact from './Contact';
import Posted from './Posted';
import Navbar from './Navbar'
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import AddPage from './AddPage';



function Home() {
    return (
        <div className="lg: flex">
            <div>
              <Navbar/>
            </div> 
           <div>
               <NewPosts/>
               <Posted/>
                <AllPosts/>
           </div>
           <div>
               <Sponsors/>
               <Contact/>
           </div>
        </div>
    )
}


export default Home;