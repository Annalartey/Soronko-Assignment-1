import React from 'react';
import Add from './Add';
import add from './add.jpg'
import AllPosts from './AllPosts';



function AddPage(){
    return(
        <div className="">
            {<img className="" src={add} alt="add" />} 
            <div className="-mt-96">
                <Add/>
                <AllPosts/>
            </div>
            
            
             
        </div>
    )
    
}


export default AddPage;