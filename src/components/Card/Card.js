// import { useState } from 'react';
// import { Rating } from 'react-simple-star-rating';
import './card.css';

function Card({ data }) {
//   const [rating, setRating] = useState(0);
//   const [ind, setInd] = useState(0);
//   const handleRating = (rate, index) => {
//     setInd(index);
//     setRating(rate);
//   };

  const posts = data.map((item, index) => {
    return (
      <div key={item.id} className="card">
        <div className="card-header">
          <p className="card-title">{item.header}</p>
          <img className="card-img" src={item.img} alt="avatar" />
        </div>
        <p className="card-description">{item.description}</p>
        <p className="card-amount">Reqired contribution amount: {item.money}$</p>
        <p className="card-coordinates">Coordinates:</p>
        <p className="card-lattitude">lattitude: {item.lattitude}</p>
        <p className="card-longitude">longtitude: {item.longtitude}</p>
        {/* <Rating
          onClick={(e) => handleRating(e, index)}
          value={ind === index && rating}
          initialValue={item.rating}
          size={20}
          label
          transition
          fillColor="orange"
          emptyColor="gray"
          className="foo"
        /> */}
      </div>
    );
  });
  return <div className="card-container">{posts}</div>;
}

export default Card;
