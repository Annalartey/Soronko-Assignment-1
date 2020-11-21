import React, {useState} from 'react';

  function LikeDislike(){
    const [like, setLike]= useState(0)
    const handleClick = () => setLike(like + 1)

    const [dislike, setDislike]= useState(0)
    const handleLike = () => setDislike(dislike + 1)

  return(
    <div className="float-right -mt-4">
        <button className="bg-white font-bold px-2 mr-5 rounded border-2 border-green-600 hover:bg-green-600 hover:text-white " onClick={handleClick}> Like {like} </button>
        <button className="bg-white font-bold px-2 mr-5 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white " onClick={handleLike}> Dislike  {dislike}</button>
    </div>
  )
}
export default LikeDislike;
