
 
const Cart = ({album, onIncrement, onDecrement, onRemove}) => {
  return ( 
    <tr>
    <td> <img  
      src= {album.image}
      alt="Card cap"
      height={135}
      width={200}
      > 
       </img></td>
    <td><br/>
    <button onClick={() => onDecrement(album)} className='btn btn-sm btn-success m-2'>-</button> 
    {album.qty}
    <button onClick={() => onIncrement(album)} className='btn btn-sm btn-success m-2'>+</button>
    </td>
    <td><br/><button onClick={()=>onRemove(album)} className="btn btn-danger">Delete</button></td>
    </tr>
   
   );
}
 
export default Cart;