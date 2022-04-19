import React, { Component } from 'react';

class Cart extends Component {
    
  state = {
    
  }

  saveInfo(){
    const obj = this.state.info 
    // obj.push({aid: this.props.album.aid, qty: 1})
    console.log(obj)
    // this.setState({info: obj})
    // console.log(this.state.info)
  }
      
    render() { 
              // this.saveInfo()
        return (
            
              <tr>
                <td> <img  
                  src= {this.props.album.image}
                  alt="Card cap"
                  height={135}
                  width={200}
                  > 
                   </img></td>
                <td><br/>
                <button onClick={() => this.props.onDecrement(this.props.album)} className='btn btn-sm btn-success m-2'>-</button> 
                {this.props.album.qty}
                <button onClick={() => this.props.onIncrement(this.props.album)} className='btn btn-sm btn-success m-2'>+</button>
                </td>
                </tr>
               
               

            
        );
    }
}
 
export default Cart;