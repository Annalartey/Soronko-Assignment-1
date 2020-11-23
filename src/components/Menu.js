import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <div className="-mt-24 px-4 ml-40 py-4">
            
        <ul>
            <Link to="/"><button className="font-bold mr-4 hover:text-blue-400">Home</button> </Link>
            <Link to="/trending"><button className="font-bold mr-4 hover:text-blue-400">Trending</button> </Link>
       
            <Link to="/business"><button className="font-bold mr-4 hover:text-blue-400">Business</button> </Link>
      
            <Link to="/entertainment"><button className="font-bold mr-4 hover:text-blue-400">Entertainment</button> </Link>
     
            <Link to="/sports"><button className="font-bold mr-4 hover:text-blue-400">Sports</button> </Link>
     
            <Link to="/music"><button className="font-bold mr-4 hover:text-blue-400">Music</button> </Link>
    
            <Link to="/videos"><button className="font-bold mr-4 hover:text-blue-400">Videos</button> </Link>
     
            <Link to="/movies"><button className="font-bold mr-4 hover:text-blue-400">Movies</button> </Link>
        
            <Link to="/events"><button className="font-bold mr-4 hover:text-blue-400">Events</button> </Link>
           
            <Link to="/login"><button className="font-bold mr-4 hover:text-blue-400">Login</button> </Link>
            <Link to="/signup"><button className="font-bold mr-4 hover:text-blue-400">Signup</button> </Link>
            <Link to="/addpage"><button className="font-bold mr-4 hover:text-blue-400" >Add Blog Post</button> </Link>
        </ul>
        </div>
    )
}


export default Menu;