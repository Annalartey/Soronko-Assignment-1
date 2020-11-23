import React from 'react'
import logo from './logo.png'

function Head() {
    return (
        <div  className="flex h-80">
            <div className="ml-40 h-42 w-42 -mt-6">
            {<img src={logo} alt="logo"/>}
            </div>
            <div className="ml-80 mt-40" >
            <input className="border px-2 text-gray-700 border-blue-300 h-10" type="text" name='search' placeholder="search" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-20 h-8 mt-1 ml-2 font-bold rounded focus:outline-none focus:shadow-outline">Search</button>
            </div>
        </div>
    )
}

export default Head
