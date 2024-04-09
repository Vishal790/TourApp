import { useState } from "react";

export default function Card({ id, name, info, image, price, removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info :  `${info.substring(0, 200)}...`;

   
    //console.log(description);

    function readMoreHandler() {
        setReadmore(!readmore)
    }

  
    return (
        <div className="card">
            <img src={image} className="image" alt="" />

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readmore ? 'Show less' : 'Read more'}
                    </span>
                </div>

            </div>

            <button className="btn-red" onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
    )
}