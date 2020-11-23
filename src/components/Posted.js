import React from 'react';
import EditDelete from './EditDelete';
import VeiwButton from './VeiwButton';


function Posted(props) {
    return (
        <div className="bg-white border-2 m-4 py-6 border-gray-900">
            <h1 className="font-bold text-xl">RECENTLY POSTED</h1>
            <hr></hr>
            <br></br>
            <h4 className="text-xl font-bold">WOMEN AND TECHNOLOGY</h4>
            
            <h5 className="text-xl">by Author's Name</h5>
            <br></br>
            <p>Dolore id velit ullamco ut amet ex commodo in. Ad velit ad anim reprehenderit ipsum excepteur. Esse elit ex enim minim. Amet eu sunt duis velit nisi sit laboris excepteur dolore labore exercitation. Cupidatat sit laboris qui adipisicing consectetur mollit proident laboris deserunt in aute.

Proident est ullamco in tempor sit aliquip. Voluptate aute adipisicing anim deserunt amet id quis excepteur esse nostrud laborum ipsum. Qui reprehenderit aliquip velit adipisicing non incididunt consectetur incididunt. Irure eiusmod anim quis elit exercitation ex non mollit. Eu laborum eu proident deserunt irure ipsum laboris. Quis adipisicing ipsum est nostrud eu veniam eiusmod non deserunt proident irure aute nulla excepteur. Enim sint sint eiusmod fugiat incididunt aliquip velit enim adipisicing.</p>
<br></br>
        <VeiwButton/>
        <br></br>
        <EditDelete/>
        </div>

    )
}


export default Posted;