import React, { Component } from 'react'
import axios from 'axios'


class Cart extends Component{

  state = {
    cartItem: []
  }

  updateCart = async () => {
    if(this.props.item.qty > 0 ){
    this.props.onUpdateQty(this.props.item.id)
    let item = await axios.get( `/api/items/${this.props.item.id}`)
    let cartItem = this.state.cartItem
    const prev_item =  cartItem.find((i) => i.iid === item.data.iid )
     if(!prev_item) {
      item =  {"data": item.data, "qty":1, "iid": item.data.iid}
       cartItem.push(item)
      }
     else{
      item = prev_item 
      ++item.qty
      const index = cartItem.indexOf(item)
      cartItem[index] =item 
     }
     this.setState({cartItem})
    }
    
  }

  componentDidMount(){
    this.updateCart()
  }

   componentDidUpdate(prevProps){
     if(prevProps.item !== this.props.item)
      this.updateCart()
  }

  
  
  // handleIncrement = (item,action) => {
  //   console.log("okay ffrom child")
  //   }   
  
  // }
  
  // handleRemove = (item) => {
  //   const cart = this.state.cart;
  //   cart.splice(cart.indexOf(item),1)
  //   this.setState({cart})
  // }

  render(){
    const {cartItem} = this.state
    return ( 
      <table className='table table-bordered'>
         <thead>
          <tr>
            <th scope='col'>Product</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Price</th>
            <th scope='col'></th>
          </tr>
        </thead>
      <tbody>
       {cartItem.map( (item,index) =>
         
         <tr key={index}>
         
        <td>
           <img  
        src= {item.data.image}
        alt="Card cap"
        height={135}
        width={200}
        > 
         </img></td>
      <td><br/>
      <div className="text-center">
      {/* <button  className='btn btn-sm btn-success m-1'>-</button>  */}
      <h6 className="text-center">{item.qty}</h6>
      {/* <button  className='btn btn-sm btn-success'>+</button> */}
      </div>
      </td>
      <td><br/><br/><h6>${item.data.price * item.qty }</h6></td>
      <td><br/><button  className="btn btn-sm btn-danger">Remove</button></td>
      </tr>)}
      </tbody>
      </table>
     
     
  )

       }
}
 
 
export default Cart;