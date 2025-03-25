import { useState } from 'react';

export const LikeDislike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setLikes(likes + 1)}> Like ({likes})</button>
        <button onClick={() => setDislikes(dislikes + 1)}> Dislike ({dislikes})</button>
      </div>
    </div>
  );
}; 