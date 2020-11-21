import React from 'react';
import Business from './Business';
import Trending from './Trending';
import Ent from './Ent' ;
import Sports from './Sports';

function AllPosts() {
    return (
        <div className="h-full">
            <Trending/>
            <Ent/>
            <Business/>
            <Sports/>
        </div>
    )
}


export default AllPosts;