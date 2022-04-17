import React, { Component } from 'react';
import albums from '../albums.json'

class Cart extends Component {
    
      
    render() { 
        return (
         <div className='col-4'>
            <h1>Cart:</h1>
            <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Product</th>
                <th scope='col'>Quantity</th>
              </tr>
              </thead>
                <tbody>
              <tr>
                <td> <img  
                  src= {albums[0].image}  
                  alt="Card cap"
                  height={100}
                  width={200}
                  > 
                   </img></td>
                <td>2</td>
                </tr>
                <tr>
                <td> <img  
                  src= {albums[1].image}  
                  alt="Card cap"
                  height={100}
                  width={200}
                  > 
                   </img></td>
                <td>2</td>
                </tr>
                <tr>
                <td> <img  
                  src= {albums[2].image}  
                  alt="Card cap"
                  height={100}
                  width={200}
                  > 
                   </img></td>
                <td>2</td>
                </tr>
                </tbody>
            </table>

            </div>
        );
    }
}
 
export default Cart;