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
            <div className="w-full bg-white shadow-md rounded px-5 py-8 pt-8">
                <form>
                    <label className="text-sm block font-bold  pb-2">Title:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='title' value={title} onChange={handleTitleInput} />
                    <br></br>
                    <label className="text-sm block font-bold  pb-2">Content:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='content' value={content} onChange={handleContentInput} />
                    <br></br>
                    <label className="text-sm block font-bold  pb-2">Author:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='authourname' value={author} onChange={handleAuthorInput} />
                     <br></br>
                    <label className="text-sm block font-bold  pb-2">Date:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="date" name='date' value={date} onChange={handleDateInput} />
                    <br></br>
                    <label>
                        <button type="button" name="button" onClick={handlePost}>Post</button>
                    </label>
                </form>
                <h1>All Posts</h1>
                <ul>
                {
                    post.map((post) => (
                        <li key={post.id}>
                            {post.title}
                            <br></br>
                            {post.author}
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