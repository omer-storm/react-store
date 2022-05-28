import Like from "./common/like";
import React from 'react'


const Items = ({item, onAddToCart}) => {
  return ( 
    <div className = "col-4" >
    <div className = "card" >
        <img 
        className="card-img-top" 
        src= {item.image}  
        alt="Card cap"
        height={200}
        width={200}
        > 
        </img>
        <div className="card-body">
          {/* {item.status && <p className="alert alert-success"> Added to cart</p> } */}
          <Like
           status = {(item.like[0]) ? true : false}
           id = {item.iid}
          />
          <h5 className="card-title" > {item.item} </h5>
          <h6 className="card-text m-2" >Price: ${item.price} || Quantity: {item.quantity}</h6>           
          <p className="card-text"> {item.author}  {item.category} {item.iid}</p>
          <p onClick={ () => onAddToCart(item)} className="btn btn-primary btn-sm"> Add to cart </p>
          
        </div>
      </div>
  </div>
   );
}
 
export default Items;

