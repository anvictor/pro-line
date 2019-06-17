import React from 'react';
const WrapListing = (props) => {
  return (
    <div className={props.class}>
      <div className='headerWL'>
        <h6 className={props.title}>{props.title}</h6>
        <img  src={require('../../assets/ListTools.png')} alt='ListTools'/>
      </div>
      <div className="additionalData">
        {props.additionalData}
      </div>
      <div  className={"wrapListing"}>
         {props.content}
      </div>
    </div>
  )
}
export default WrapListing;
