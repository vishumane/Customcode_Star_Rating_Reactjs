
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
const StarRating = () => {
    const [rating, setRating] = useState('');
    const [hover, setHover] = useState('');


    return (
        <div>
            <h3>rating in reactjs</h3>
            {[...Array(5)].map((star, i) => {
                const ratinfvalue = i + 1;
                return (
                    <label>

                        <input type="radio"
                            name="rating"
                            value={ratinfvalue}
                            onChange={() => setRating(ratinfvalue)}
                        />
                        <FaStar className="star"
                            color={ratinfvalue <= (hover || rating) ? "yellow" : "gray"}
                            size={25}
                            onMouseEnter={() => setHover(ratinfvalue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <p> your rating value outof 5 is : {rating}</p>

        </div>
    );
}
export default StarRating;