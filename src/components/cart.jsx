import React, { Component } from 'react';
import albums from '../albums.json'

class Cart extends Component {
    
      
    render() { 
        return (
            
              <tr>
                <td> <img  
                  src= {this.props.album.image}
                  alt="Card cap"
                  height={100}
                  width={200}
                  > 
                   </img></td>
                <td>2</td>
                </tr>
               
               

            
        );
    }
}
 
export default Cart;