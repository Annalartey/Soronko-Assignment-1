import React from 'react';
import Menu from './Menu';
import Add from './Add';
import Contact from './Contact';
import Sponsors from './Sponsors';



function AddPage(){
    return(
        <div className="body">
            <Menu/>
            <Add/>
            <div>
                <Contact/>
                <Sponsors/>
            </div>
        </div>
    )
    
}


export default AddPage;