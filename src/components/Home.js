import React from 'react';
import AllPosts from './AllPosts';
import NewPosts from './NewPosts';




function Home() {
    return (
        <div className=" py-2">
           <div>
               <NewPosts/>
                <AllPosts/>
           </div>
        </div>
    )
}


export default Home;