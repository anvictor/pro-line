import React from 'react';
const CardMessage = (props) => {
  return (
    <div  className="cardMessage">
      <h6>{props.fullName}</h6>
       <div className='messagePlace'>
         {props.message}
        </div>
      <p className='datePlace'>{props.date}</p>
    </div>
  )
}
export default CardMessage;
