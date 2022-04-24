// import Like from "./common/like";


const Items = ({item, onAddToCart,onLike}) => {
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
          {/* <Like
           status= {likeStatus}
           onLike={onLike}
           item={item}
          /> */}
          <h5 className="card-title" > {item.item} </h5>
          <p className="card-text"> {item.author}</p>
          <p onClick={ () => onAddToCart(item)} className="btn btn-primary btn-sm"> Add to cart </p>
          
        </div>
      </div>
  </div>
   );
}
 
export default Items;

