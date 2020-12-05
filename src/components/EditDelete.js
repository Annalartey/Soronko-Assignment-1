import React from 'react'


function EditDelete (){
    return(
        <div className="float-right -mt-4">
        <button className="bg-white font-bold px-2 mr-5 rounded border-2 border-green-600 hover:bg-green-600 hover:text-white ">Edit</button>
        <button className="bg-white font-bold px-2 mr-5 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white ">Delete</button>
        </div>
    )
}




export default EditDelete;