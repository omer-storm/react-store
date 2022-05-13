import './App.css';
import React, { Component } from 'react'
import Items from './components/items'
import Cart from './components/cart'
import Navbar from './components/navbar';
import Pagination from './components/common/pagination';
import paginate  from './utils/paginate';
import ListGroup from './components/common/listGroup';
import Purchase from './components/purchase';
import axios from 'axios'
class App extends Component{

  state = {
    items: [],
    cart_id: null,
    filter: {},
    itemsPerPage: 9,
    currentPage: 1,
    paginationRowLength: 3,
    resetPages: false,
    categories: ["books", "music"],
    selected_category: "books"
   
  }

  getItems = async (filter) => {
    const items = await axios.get( "/api/items")
     this.setState({items: items.data, filter: items.data.filter((item) =>{ return item.category === filter })})
  }
    
 
  async componentDidMount(){
    this.getItems("books")
  }

   handlePageChange = (page) =>{
   
    this.setState({currentPage: page})
  }

  handlePageResume = () =>{
    this.setState({resetPages: false})
  }
   
  
 handleAddToCart = (item) => {
   this.setState({cart_id: {id: item.iid, qty: item.quantity}})
 }

 updateQty = (id) => {
  let  update_item = this.state.items.find(i => i.iid === id )
  const index = this.state.items.indexOf(update_item)
  update_item = this.state.items
  --update_item[index].quantity  
  this.setState({items: update_item})
  
}
     




handleFilter = (filter) => {
  const items = this.state.items
  this.setState({
   filter:  items.filter((item) =>{ return item.category === filter }),
   selected_category: filter,
   resetPages: true,
   currentPage: 1
  })
}


render(){
   const page_items = paginate(this.state.filter,this.state.currentPage,this.state.itemsPerPage)
   const {categories, selected_category} = this.state
  return (

 <div className='container'>

       <Navbar />
  

  <div className='row'>


    <div className='App col-8'>
    <div className='row'>

      <div className="col-4">
        <ListGroup
         onFilter = {this.handleFilter}
         categories= {categories}
         selected_category = {selected_category}
        />
      </div>
    </div>

     <br/>

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
    itemsCount={this.state.filter.length} 
    itemsPerPage={this.state.itemsPerPage}
    currentPage= {this.state.currentPage}
    paginationRowLength = {this.state.paginationRowLength}
    resetPages = {this.state.resetPages}
    onPageResume = {this.handlePageResume}
    onPageChange= {this.handlePageChange}
    />
  </div>

    <div className='col-4'>

      {this.state.cart_id !== null && <Cart item = {this.state.cart_id} onUpdateQty = {this.updateQty}/>}
      
      { this.state.cart_id !== null && <Purchase/>}

    </div>
    
   
     </div>
</div>      
  )
}

}
export default App;
