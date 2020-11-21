import React from 'react';

function NewPost() {
    return (
        <form >
            <label className="flex w-80 h-10">
                <input className="shadow appearance-none border px-2 text-gray-700 focus:outline-none focus:shadow-outline border-blue-300" type="text" name='new post' placeholder="What is new?" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-8 mt-1 ml-4 font-bold rounded focus:outline-none focus:shadow-outline">Share</button>
            </label>
        </form>
    )
}


export default NewPost;  