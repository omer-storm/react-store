import '../App.css';
import items from '../items.json'
import { Component } from 'react'
import Items from './items'
import Cart from './cart'
import Navbar from './navbar';
import Pagination from './common/pagination';
import  paginate  from '../utils/paginate';
import ListGroup from './common/listGroup';


class App extends Component{
 
 state = {
   items,
   cart: [],
   itemsPerPage: 9,
   currentPage: 1,
   previousPages:[1],
   previousPageTop: 1,
   categories: ["books", "music"]

 }

handleAddToCart = (item) => {
  const cart = [...this.state.cart]
  const previous = this.state.cart.find((i) => item.iid === i.iid)
  
  if(!previous){
  item.qty = 1  
  cart.push(item)
  this.setState({cart});
  }
  else{
    const index = cart.indexOf(previous);
    ++previous.qty
    cart[index] = previous
    this.setState({cart});
  }
}

handleDecrement = (item) => {
  
  if(item.qty > 1){
    const cart = this.state.cart
    const previous = this.state.cart.find((i) => item.iid === i.iid)
    const index = cart.indexOf(previous);
    --previous.qty
    cart[index] = previous 
    this.setState({cart});
  }   

}

handleRemove = (item) => {
  const cart = this.state.cart;
  cart.splice(cart.indexOf(item),1)
  this.setState({cart})
}

handleLike = (item) => {
  console.log(item)
}

handlePageChange = (page) =>{
   
  this.setState({currentPage: page})
}

handleNextPageChange = (page) =>{
  let {previousPages, previousPageTop} = this.state

  if(previousPageTop !== 6){
    previousPages[previousPageTop] = page
    previousPageTop++
  }else{
      previousPages[previousPageTop] = page
  }
  // console.log(previousPages)
 this.setState({currentPage: page, previousPages, previousPageTop})
}

handleFilter = (filter) => {
 console.log(filter)
}

render(){
   const page_items = paginate(this.state.items,this.state.currentPage,this.state.itemsPerPage)
  return (

 <div className='container'>

       <Navbar
      
       />

  <div className='row'>


    <div className='App col-8'>
    <div className='row'>
      <div className="col-4">
        <ListGroup
         onFilter = {this.handleFilter}
        />
      </div>
    </div>
    
    <div className='row'>
 
    
    {page_items.map(item =>
      <Items 
      key={item.iid}
      item = {item}
      onLike={this.handleLike}
      // likeStatus={false}
      onAddToCart = {this.handleAddToCart}
      />
    )}
    </div>
    <br/>
    <Pagination 
    itemsCount={this.state.items.length} 
    itemsPerPage={this.state.itemsPerPage}
    onPageChange={this.handlePageChange}
    currentPage= {this.state.currentPage}
    previousPages= {this.state.previousPages}
    previousPageTop = {this.state.previousPageTop}
    onNextPageChange = {this.handleNextPageChange}
    />
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
      key={cart.iid}
      item = {cart}
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
