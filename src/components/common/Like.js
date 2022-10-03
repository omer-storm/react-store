import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';
import axios from 'axios';


class Like extends Component {

  state= {
    "status": false,
    "id": 1
  }

  componentDidMount(){
    this.setState({...this.props})

  }

  handleLike = () => {
    if (this.state.status === false) { 
      axios.post(`/api/likes/${this.state.id}`)
      this.setState({"status": true}) 
     } 
     else{
      axios.delete(`/api/likes/${this.state.id}`)
      this.setState({"status": false})
     }
      
  }

  render(){
    return (       
      <FontAwesomeIcon 
      className='h4' 
      icon={faHeart} 
      style={{cursor:"pointer", color: (this.state.status === true) ? "#0275d8" : "grey"}}
      onClick={this.handleLike}
  
      />
    )  
  }
}
      
            
export default Like;