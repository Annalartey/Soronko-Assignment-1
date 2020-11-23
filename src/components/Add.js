import React, { useState } from 'react';
import { v1 as uuid } from "uuid"
//import Posted from './Posted';
//import AllPosts  from './AllPosts'


function Add() {

    const [title, setTitle] = useState("")

    const [content, setContent] = useState("")

    const [author, setAuthor] = useState("")

    const [date, setDate] = useState("")

    const [post, setPost] = useState([]);




    const handleTitleInput = (event) => {
        setTitle(event.target.value)
    }

    const handleContentInput = (event) => {
        setContent(event.target.value)
    }
    const handleAuthorInput = (event) => {
        setAuthor(event.target.value)
    }
    const handleDateInput = (event) => {
        setDate(event.target.value)
    }

    const handlePost= (event) => {
        event.preventDefault();
         setPost(
             [
                 ...post,
                 {
                     id: uuid(),
                     title: title,
                     author: author,
                     content: content,
                     date: date
                 }
             ]);
        
        setTitle("");
        setAuthor("");
        setContent("")
        setDate("");
    };






        return (
            <div className="max-w-xl rounded px-5 py-8 pt-8">
                
                <form className="-mt-96 ml-20">
                    <label className="text-2xl text-white block font-bold pb-2">TITLE:</label>
                    <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='title' value={title} onChange={handleTitleInput} />
                    <br></br>
                    <label className="text-2xl text-white block font-bold  pb-2">AUTHOR:</label>
                    <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='content' value={content} onChange={handleContentInput} />
                    <br></br>
                    <label className="text-2xl text-white block font-bold  pb-2">CONTENT:</label>
                    <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='authourname' value={author} onChange={handleAuthorInput} />
                     <br></br>
                    <label className="text-2xl text-white block font-bold  pb-2">DATE:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="date" name='date' value={date} onChange={handleDateInput} />
                    <br></br>
                    <label>
                        <center><button className="rounded border-2 border-white text-white px-4 mt-4 " type="button" name="button" onClick={handlePost}>Post</button></center>
                    </label>
                </form>
                <center><h1 className="font-bold text-black text-4xl mt-80 ml-96">All Posts</h1></center>
                <ul className="ml-40 max-w-xl">
                {
                    post.map((post) => (
                        <li key={post.id}>
                            <h1 className="font-bold text-2xl">{post.title}</h1>
                            <br></br>
                            <h1 className="font-bold text-xl"> By {post.author}</h1>
                            <br></br>
                             {post.content}
                            <br></br>
                            {post.date}
                        </li>
                        )
                    )
                }
                </ul>
            
            </div>
        );
    }

    export default Add;