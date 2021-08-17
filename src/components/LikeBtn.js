import { useState } from "react";

const LikeBtn = ({ db, initCount }) => {
    
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(initCount);

    const handleClick = () => {
        setCount(count + 1);
        db.ref("/like").set(count + 1);
        setLiked(true);
        setTimeout(() => {
            setLiked(false);
        }, 100);
    }
    return (
        <div className="countLike">
            {!liked && <img src={require("../likeBtn/like.png").default} 
                        className="like" onClick={handleClick} alt="not found"/>}
            {liked && <img src={require("../likeBtn/like-onclick.png").default} 
                        className="like" alt="not found"/>}
            <p>{ count }</p>
        </div>
    );
}

export default LikeBtn;

