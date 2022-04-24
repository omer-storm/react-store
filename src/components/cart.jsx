
 
const Cart = ({item, onIncrement, onDecrement, onRemove}) => {
  return ( 
    <tr>
    <td> <img  
      src= {item.image}
      alt="Card cap"
      height={135}
      width={200}
      > 
       </img></td>
    <td><br/>
    <button onClick={() => onDecrement(item)} className='btn btn-sm btn-success m-2 '>-</button> 
    {item.qty}
    <button onClick={() => onIncrement(item)} className='btn btn-sm btn-success m-2 '>+</button>
    </td>
    <td><br/><button onClick={()=>onRemove(item)} className="btn btn-sm btn-danger">Remove</button></td>
    </tr>
   
   );
}
 
export default Cart;