import React from 'react';
import Business from './Business';
import Trending from './Trending';
import Ent from './Ent' ;
import Sports from './Sports';
import Posted from './Posted';



function AllPosts(){
    return (
        <div className="h-full mt-2 ml-40 mr-40">
            <Posted/>
            <Trending/>
             <Ent/>
            <Business/>
            <Sports/> 
        </div>
    )
}


export default AllPosts;