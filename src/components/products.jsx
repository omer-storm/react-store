import '../App.css';
import { Component } from 'react';


class App extends Component{


render(){
 
  return (
      <div className = "col-4" >
        <div className = "card" >
            <img 
            className="card-img-top" 
            src= {this.props.album.image}  
            alt="Card cap"> 
            </img>
            <div className="card-body">
              {/* {this.props.album.status && <p className="alert alert-success"> Added to cart</p> } */}
              <h5 className="card-title"> {this.props.album.name}</h5>
              <p className="card-text"> {this.props.album.artist}</p>
              <p onClick={ () => this.props.onAddToCart(this.props.album)} className="btn btn-primary btn-sm"> Add to cart </p>
            </div>
          </div>
      </div>

      
  )
}

}


export default App;
