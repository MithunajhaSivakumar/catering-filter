import React from 'react'
import './ListItem.css'
import {FaStar} from 'react-icons/fa';


function ListItem({
    item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
  }) {
  return (
    <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>

      <div className='productRating'>
        {[...Array(rating)].map((index)=>(
            <FaStar id={index+1} key={index} className={"productCard__star"} />
        ))}
      </div>
    </header>
    <footer>
      <p>
        <b>Order counts : {serviceTime}</b> 
      </p>
      <p>
        <b>Starting Cost per-plate : ${price}</b>
      </p>
    </footer>
  </div>
  )
}

export default ListItem