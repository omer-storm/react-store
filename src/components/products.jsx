// import Like from "./common/like";


const Products = ({album, onAddToCart,onLike}) => {
  return ( 
    <div className = "col-4" >
    <div className = "card" >
        <img 
        className="card-img-top" 
        src= {album.image}  
        alt="Card cap"> 
        </img>
        <div className="card-body">
          {/* {album.status && <p className="alert alert-success"> Added to cart</p> } */}
          {/* <Like
           status= {likeStatus}
           onLike={onLike}
           album={album}
          /> */}
          <h5 className="card-title" > {album.name} </h5>
          <p className="card-text"> {album.artist}</p>
          <p onClick={ () => onAddToCart(album)} className="btn btn-primary btn-sm"> Add to cart </p>
          
        </div>
      </div>
  </div>
   );
}
 
export default Products;

