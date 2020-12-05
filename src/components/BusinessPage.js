import React from 'react'
import LikeDislike from './LikeDislike';
import money from './money.jpg'
import {Link} from 'react-router-dom';

function BusinessPage() {
    return (
        <div className="bg-white border-2 m-4 py-6 px-4 border-gray-900">
        <h1 className="font-bold text-4xl text-center">Business News</h1>
         <hr></hr>
         <br></br>
        <div className="float-right -ml-96 text-center mr-32 mt-8">
            <h3 className="text-2xl font-bold -ml-96">Stock Price Rises Uncontrolably</h3>
            <h4 className="text-xl -ml-96">by Someone Too</h4>
        </div>
        <br></br>
        <div className="flex">
            <img className=" h-full w-1/2 rounded-l-3xl border-4 border-blue-500 ml-8 -mr-8 shadow-2xl" src={money} alt="women in tech"/>
            <p className="w-1/2 text-xl rounded-l-3xl border-4 border-red-300 px-4 -ml-8 mt-24 bg-gray-100 shadow-2xl mb-8 py-4">Amet sunt laborum irure sunt reprehenderit proident sunt officia sunt anim eiusmodnulla mollit nisi. Excepteur ex enim ipsum ea. Magna tempor magna deserunt et ut pariatur reprehenderit laborum sit. Velit id elit nulla minim consequat nostrud nulla voluptate laboris eu. Esse nostrud nulla fugiat ipsum adipisicing duis laborum ad aliqua anim proident sint. Dolore dolor consequat cupidatat excepteur laboris dolor enim enim veniam.
            Nulla tempor laborum ex amet sint dolore duis dolor adipisicing Lorem id labore. Nostrud est occaecat ad dolore excepteur est voluptate ut duis. Voluptate minim nostrud amet ipsum laboris ex officia veniam exercitation amet pariatur cillum. Cillum voluptate enim do consectetur.Amet sunt laborum irure sunt reprehenderit proident sunt officia sunt anim eiusmodnulla mollit nisi. Excepteur ex enim ipsum ea. Magna tempor magna deserunt et ut pariatur reprehenderit laborum sit. Velit id elit nulla minim consequat nostrud nulla voluptate laboris eu. Esse nostrud nulla fugiat ipsum adipisicing duis laborum ad aliqua anim proident sint. Dolore dolor consequat cupidatat excepteur laboris dolor enim enim veniam.
            Nulla tempor laborum ex amet sint dolore duis dolor adipisicing Lorem id labore. Nostrud est occaecat ad dolore excepteur est voluptate ut duis. Voluptate minim nostrud amet ipsum laboris ex officia veniam exercitation amet pariatur cillum. Cillum voluptate enim do consectetur.</p>
        </div>
        <p className="ml-8 bg-blue-100 w-72 px-4 rounded-r-full border-2 border-gray-400 -mt-72 mb-6 ">OTHER BUSINESS STORIES</p>
        <p className="ml-8 bg-blue-100 w-72 px-4 rounded-r-full border-2 border-gray-400 mb-6 ">OTHER BUSINESS STORIES</p>
        <p className="ml-8 bg-blue-100 w-72 px-4 rounded-r-full border-2 border-gray-400 mb-6 ">OTHER BUSINESS STORIES</p>
        <p className="ml-8 bg-blue-100 w-72 px-4 rounded-r-full border-2 border-gray-400 mb-20 ">OTHER BUSINESS STORIES</p>
        <br></br>
        <Link to="/"><button className="rounded bg-gray-300 hover:bg-gray-500 hover:text-white font-bold px-2 ml-8">BACK</button> </Link>

        <LikeDislike/>
    </div>
    )
}

export default BusinessPage
