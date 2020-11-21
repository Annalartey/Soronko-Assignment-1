import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <div className="mt-16">
        <ul>
            <Link to="/trending"><button className="bg-white border-2 border-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-10 mt-2 rounded focus:outline-none focus:shadow-outline">Trending</button> </Link>
            <br></br>
            <Link to="/business"><button className="bg-white border-2 border-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-10 mt-10 rounded focus:outline-none focus:shadow-outline">Business</button> </Link>
            <br></br>
            <Link to="/entertainment"><button className="bg-white border-2 border-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-5 mt-10 rounded focus:outline-none focus:shadow-outline">Entertainment</button> </Link>
            <br></br>
            <Link to="/sports"><button className="bg-white border-2 border-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-12 mt-10 rounded focus:outline-none focus:shadow-outline">Sports</button> </Link>
            <br></br>
            <Link to="/music"><button className="bg-white border-2 border-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-12 mt-10 rounded focus:outline-none focus:shadow-outline">Music</button> </Link>
             <br></br>
            <Link to="/videos"><button className="bg-white border-2 border-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-12 mt-10 rounded focus:outline-none focus:shadow-outline">Videos</button> </Link>
            <br></br>
            <Link to="/movies"><button className="bg-white border-2 border-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-11 mt-10 rounded focus:outline-none focus:shadow-outline">Movies</button> </Link>
            <br></br>
            <Link to="/events"><button className="bg-white border-2 border-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-12 mt-10 rounded focus:outline-none focus:shadow-outline">Events</button> </Link>
            <br></br>
            <Link to="/addpage"><button className="bg-white border-2 border-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-12 mt-10 rounded focus:outline-none focus:shadow-outline" >Add Blog Post</button> </Link>
        </ul>
        </div>
    )
}


export default Menu;