
 
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
    <div class="text-center">
    <button onClick={() => onDecrement(item)} className='btn btn-sm btn-success m-1'>-</button> 
    <h6 className="text-center">{item.qty}</h6>
    <button onClick={() => onIncrement(item)} className='btn btn-sm btn-success'>+</button>
    </div>
    </td>
    <td><br/><br/><h6>${item.price * item.qty}</h6></td>
    <td><br/><button onClick={()=>onRemove(item)} className="btn btn-sm btn-danger">Remove</button></td>
    </tr>
   
   );
}
 
export default Cart;