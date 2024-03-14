import React from 'react'
import '../Cart.css'
 function Restrountcart({ name, descriptions,time,image }) {
    return (
        <div className='cart'>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <h2>{descriptions}</h2>
            <p>{time}</p>
        </div>
    );
}
export default Restrountcart;
