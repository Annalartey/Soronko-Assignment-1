import React from 'react';
import LikeDislike from './LikeDislike';
import {Link} from 'react-router-dom';


function Business() {
    return (
        <div className="bg-white border-2 m-4 py-6 px-4 border-gray-900">
            <h1 className="font-bold text-xl">Business News</h1>
            <hr></hr>
            <br></br>
            <h3 className="text-xl font-bold">Stock Price Rises Uncontrolably</h3>
            <h4 className="text-xl">by Someone Too</h4>
            <br></br>
            <p>Amet sunt laborum irure sunt reprehenderit proident sunt officia sunt anim eiusmod nulla mollit nisi. Excepteur ex enim ipsum ea. Magna tempor magna deserunt et ut pariatur reprehenderit laborum sit. Velit id elit nulla minim consequat nostrud nulla voluptate laboris eu. Esse nostrud nulla fugiat ipsum adipisicing duis laborum ad aliqua anim proident sint. Dolore dolor consequat cupidatat excepteur laboris dolor enim enim veniam.

Nulla tempor laborum ex amet sint dolore duis dolor adipisicing Lorem id labore. Nostrud est occaecat ad dolore excepteur est voluptate ut duis. Voluptate minim nostrud amet ipsum laboris ex officia veniam exercitation amet pariatur cillum. Cillum voluptate enim do consectetur.</p>


           <br></br>
           <Link to="/business"><button className="rounded bg-gray-300 hover:bg-gray-500 hover:text-white font-bold px-2 ml-8">Read More</button> </Link>
            <br></br>
            <LikeDislike/>
        </div>
    )
}


export default Business;