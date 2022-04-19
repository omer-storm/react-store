import '../App.css';
import albums from '../albums.json'
import { Component } from 'react'
import Products from './products'
import Cart from './cart'
import Navbar from './navbar';


class App extends Component{
 
 state = {
   albums,
   cart: []
 }

handleAddToCart = (album) => { 
  const cart = this.state.cart
  const previous = this.state.cart.find((a) => album.aid === a.aid)
  if(!previous){
  album.qty = 1  
  cart.push(album)
  this.setState({cart});
  }
  else{
    const index = cart.indexOf(previous);
    ++previous.qty
    cart[index] = previous
    this.setState({cart});
  }
}

handleIncrement = (album,type) => {
  
  const cart = this.state.cart
  const previous = this.state.cart.find((a) => album.aid === a.aid)
  const index = cart.indexOf(previous);
  if(type === "dec" && album.qty > 1){
    --previous.qty
  }   else if(type === "inc"){
    ++previous.qty
  }
  cart[index] = previous 
  this.setState({cart});

}

render(){
 
  return (

 <div className='container'>

       <Navbar />

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
      {this.state.cart.length !== 0 && this.state.cart.map(cart => <Cart
      key={cart.aid}
      album = {cart}
      onIncrement = {this.handleIncrement}
      />)}
      </tbody>
            </table>
    </div>
   
     </div>
</div>      
  )
}

}



export default App;
