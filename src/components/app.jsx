import '../App.css';
import albums from '../albums.json'
import { Component } from 'react'
import Products from './products'
import Cart from './cart'


class App extends Component{
 
 state = {
   albums,
   cart: [] 
 }

handleAddToCart = (album) => { 
  const cart = this.state.cart
  cart.push(album)
  this.setState({albums: this.state.albums.splice(album), cart: cart});
}

render(){
 
  return (
  <div className='row'>
    <div className='App col-8'>
    
    <div className='row'>
    {this.state.albums.map(album =>
      <Products 
      key={album.aid}
      album = {album}
      onAddToCart = {this.handleAddToCart}
      />

      

    )}
    </div>
  </div>



    <div className='col-4'>
    <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Product</th>
                <th scope='col'>Quantity</th>
              </tr>
              </thead>
                <tbody>
      {this.state.cart.length != 0 && this.state.cart.map(cart => <Cart
      key={cart.aid}
      album = {cart}
      />)}
      </tbody>
            </table>
    </div>
   
     </div>
      
  )
}

}



export default App;
