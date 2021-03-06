import React from 'react';
import LikeDislike from './LikeDislike';
import VeiwButton from './VeiwButton'

function Music() {
    return (
        <div className="bg-white border-2 m-4 py-6 border-gray-900">
            <h1 className="font-bold text-xl">Trending</h1>
             <hr></hr>
             <br></br>
            <h3 className="text-xl font-bold">Women And Technology</h3>
            <h4 className="text-xl">by The Authour</h4>
            <br></br>
            <p>Amet sunt laborum irure sunt reprehenderit proident sunt officia sunt anim eiusmod nulla mollit nisi. Excepteur ex enim ipsum ea. Magna tempor magna deserunt et ut pariatur reprehenderit laborum sit. Velit id elit nulla minim consequat nostrud nulla voluptate laboris eu. Esse nostrud nulla fugiat ipsum adipisicing duis laborum ad aliqua anim proident sint. Dolore dolor consequat cupidatat excepteur laboris dolor enim enim veniam.

Nulla tempor laborum ex amet sint dolore duis dolor adipisicing Lorem id labore. Nostrud est occaecat ad dolore excepteur est voluptate ut duis. Voluptate minim nostrud amet ipsum laboris ex officia veniam exercitation amet pariatur cillum. Cillum voluptate enim do consectetur.</p>

            <br></br>
            <VeiwButton/>
            <br></br>
            <LikeDislike/>
        </div>
    )
}


export default Music;