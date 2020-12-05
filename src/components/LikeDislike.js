import React, {useEffect, useState} from 'react';

  function LikeDislike(){
    const [like, setLike]= useState(0)
    const handleLike = () => {
      let newLike = Number(like) + 1
      setLike(newLike)
      localStorage.setItem("like" , newLike)
    }

    const [dislike, setDislike]= useState(0)
    const handleDislike = () => {
      let newDislike = Number(dislike) + 1
      setDislike(newDislike)
      localStorage.setItem("dislike" , newDislike)
    }

    useEffect(() => {
      let likes = localStorage.getItem("like")
      if (likes) {
        setLike(likes)
      }

      let dislikes = localStorage.getItem("dislike")
      if (dislikes) {
        setDislike(dislikes)
      }
    }, [])

  return(
    <div className="float-right -mt-4">
        <button className="bg-white font-bold px-2 mr-8 rounded border-2 border-green-600 hover:bg-green-600 hover:text-white " onClick={handleLike}> Like {like} </button>
        <button className="bg-white font-bold px-2 mr-8 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white " onClick={handleDislike}> Dislike  {dislike}</button>
    </div>
  )
}
export default LikeDislike;
