import '../App.css';
import albums from '../albums.json'
import { Component } from 'react';


class App extends Component{
 
 state = {
   albums 
 }

handleAddToCart = (album) => {
  album.status = true;
  this.setState({albums: this.state.albums.splice(album) });
}

render(){
 
  return (
    <div className='App col-8'>
      <div className="row">
        {this.state.albums.map(album =>
      <div className = "col-4" key={album.aid}>
        <div className = "card" >
            <img 
            className="card-img-top" 
            src= {album.image}  
            alt="Card cap"> 
            </img>
            <div className="card-body">
              {album.status && <p className="alert alert-success"> Added to cart</p> }
              <h5 className="card-title"> {album.name} {this.state.status}</h5>
              <p className="card-text"> {album.artist}</p>
              <p onClick={ () => this.handleAddToCart(album)} className="btn btn-primary btn-sm"> Add to cart </p>
            </div>
          </div>
      </div>
      )}
      </div>
  </div>

      
  )
}

}


export default App;
