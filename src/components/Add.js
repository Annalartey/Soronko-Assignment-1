import React, { useState } from 'react';
import { v1 as uuid } from "uuid"
//import Posted from './Posted';



function Add() {

    const [title, setTitle] = useState("")

    const [content, setContent] = useState("")

    const [author, setAuthor] = useState("")

    const [date, setDate] = useState("")

    const [post, setPost] = useState("Null")

    const [edit, setEdit] = useState("false")



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

    function handlePost(event) {
        event.preventDefault();
        if (title==="title" && author==="author" &&content==="content" && date==="date")
        setPost(
            [

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

    const handleEdit = (event) => {
        event.preventDefault();
        setEdit(
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
        }






        return (
            <div className="">
                <form>
                    <label>
                        Title:
                    <input type="text" name='title' value={title} onChange={handleTitleInput} />
                    </label>
                    <br></br>
                    <label>
                        Content:
                    <input type="text" name='content' value={content} onChange={handleContentInput} />
                    </label>
                    <br></br>
                    <label>
                        Author:
                    <input type="text" name='authourname' value={author} onChange={handleAuthorInput} />
                    </label>
                    <br></br>
                    <label>
                        Date:
                    <input type="date" name='date' value={date} onChange={handleDateInput} />
                    </label>
                    <br></br>
                    <label>
                        <button type="button" name="button" onClick={handlePost}>Post</button>
                        <button type="button" name="button" onClick={handleEdit}>Edit</button>
                    </label>
                </form>
                    <div> {
                        post
                        ?
                        <>
                            <h1>All Posts</h1>
                            <li key={post.id}>
                            {post.title} {post.author} {post.content} {post.date}
                            </li>
                        </>
                        :
                        <>
                            <form>
                                <label>
                                    Title:
                                <input type="text" name='title' value={title} onChange={handleTitleInput} />
                                </label>
                                <br></br>
                                <label>
                                    Content:
                                <input type="text" name='content' value={content} onChange={handleContentInput} />
                                </label>
                                <br></br>
                                <label>
                                    Author:
                                <input type="text" name='authourname' value={author} onChange={handleAuthorInput} />
                                </label>
                                <br></br>
                                <label>
                                    Date:
                                <input type="date" name='date' value={date} onChange={handleDateInput} />
                                </label>
                                <br></br>
                                <label>
                                    <button type="button" name="button" onClick={handlePost}>Post</button>
                                    <button type="button" name="button" onClick={handleEdit}>Edit</button>
                                </label>
                            </form>
                        </>
                    }
                    </div>
                
                
            </div>
        );
    }

    export default Add;