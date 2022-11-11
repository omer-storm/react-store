import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../components/common/Navbar'
// import Items from './items'

class LikedItems extends Component {


    state = {
        likedItems: []
    }

    getLikedItems = async () => {
        const likedItems = await axios.get("/api/likes")
        this.setState({ likedItems: likedItems.data})
        
      }

      componentDidMount() {
          this.getLikedItems()
      }

    render() { 
        const {likedItems} = this.state
     
        return (
            <div className='container'>
                <Navbar/>
                <div className='row'>
                     {likedItems.map(((item, index) => 
                      <div className='col-4' key={index}>
                          <div className='card'>
                              <img
                               className='card-img-top'
                               src = {item.item[0].image}
                               height= {200}
                               width = {200}
                               alt= ""
                              />
                          </div>
                         
                      </div>
                      ))}

                </div>
               
                
            </div>
        );
    }
}
 
export default LikedItems;