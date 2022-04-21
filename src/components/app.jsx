import '../App.css';
import albums from '../albums.json'
import { Component } from 'react'
import Products from './products'
import Cart from './cart'
import Navbar from './navbar';
import Pagination from './common/pagination';
import  paginate  from '../utils/paginate';

class App extends Component{
 
 state = {
   albums,
   cart: [],
   itemsPerPage: 6,
   currentPage: 1
 }

handleAddToCart = (album) => {
  const cart = [...this.state.cart]
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

handleDecrement = (album) => {
  
  if(album.qty > 1){
    const cart = this.state.cart
    const previous = this.state.cart.find((a) => album.aid === a.aid)
    const index = cart.indexOf(previous);
    --previous.qty
    cart[index] = previous 
    this.setState({cart});
  }   

}

handleRemove = (album) => {
  const cart = this.state.cart;
  cart.splice(cart.indexOf(album),1)
  this.setState({cart})
}

handleLike = (album) => {
  console.log(album)
}

handlePageChange = (page) =>{
  this.setState({currentPage: page})
}

render(){
   const page_albums = paginate(this.state.albums,this.state.currentPage,this.state.itemsPerPage)
  return (

 <div className='container'>

       <Navbar />

  <div className='row'>
    <div className='App col-8'>
    
    <div className='row'>
    <Pagination 
    itemsCount={this.state.albums.length} 
    itemsPerPage={this.state.itemsPerPage}
    onPageChange={this.handlePageChange}
    currentPage= {this.state.currentPage}

    />
    
    {page_albums.map(album =>
      <Products 
      key={album.aid}
      album = {album}
      onLike={this.handleLike}
      // likeStatus={false}
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
                <th scope='col'></th>
              </tr>
              </thead>
                <tbody>
      { this.state.cart.length !== 0 && this.state.cart.map(cart => <Cart
      key={cart.aid}
      album = {cart}
      onIncrement = {this.handleAddToCart}
      onDecrement = {this.handleDecrement}
      onRemove = {this.handleRemove}
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
