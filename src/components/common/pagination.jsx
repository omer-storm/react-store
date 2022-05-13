import React, { Component } from 'react';

class Pagination extends Component{

  state = {
    ...this.props,
    previousPages: [1],
    previousPageTop: 0

  }
  
  componentDidUpdate(prevProps){
    if(prevProps !== this.props)
    this.setState({...this.props})

    if(this.props.resetPages === true){
      this.setState(
        {
          previousPages: [1],
          previousPageTop: 0
        })

        this.props.onPageResume()
    }
    
  }  
  
  PageChange = (page) =>{
   this.props.onPageChange(page)
  }
  
  PreviousPageChange = (page) => {
    let {previousPages, previousPageTop, paginationRowLength} = this.state
    const index = previousPages.indexOf(page-1)
  
  
    if(index === -1){
    if(page > paginationRowLength){
      previousPages[previousPageTop-1] = page-1
      previousPages[previousPageTop] = page
      this.setState({currentPage: page, previousPages})
      this.props.onPageChange(page)
    }
  }else{
    previousPages[previousPageTop] = page+1
    previousPages[previousPageTop-1] = page
    this.setState({currentPage: page, previousPages})
    this.props.onPageChange(page) 
   }

  }
  
  NextPageChange = (page) =>{
    let {previousPages, previousPageTop, paginationRowLength} = this.state
    
    
    if(previousPageTop <= paginationRowLength){
      
      previousPageTop++
      previousPages[previousPageTop] = page
    }
     else{
      previousPages[previousPageTop-1] = page-1
        previousPages[previousPageTop] = page
    }
  
    
   this.setState({currentPage: page, previousPages, previousPageTop})
   this.props.onPageChange(page)
  }

  
  

  render(){
  

    const {itemsCount,itemsPerPage, currentPage, previousPages, paginationRowLength, previousPageTop} = this.state

  
    const totalPages = Math.ceil(itemsCount/itemsPerPage)

    if(totalPages === 1) return null

      return(
        
        <nav aria-label="Page navigation">
          
        <ul className="pagination justify-content-center">
        {<li className= {(currentPage === 1 ) ? "page-item disabled": "page-item"}>
           <button 
           onClick=
           {() =>
             (currentPage > 1 ) && 
             (previousPages.indexOf(currentPage-1) !== -1) ? this.PageChange(currentPage-1) : this.PreviousPageChange(currentPage-1)
            } 
            className="page-link" >
              previous</button>
           </li>}
        
        {previousPages.map((page,index) => 
        <React.Fragment key={index}>
        <li 
        className={(page !== currentPage)? "page-item": "page-item active"
        }>
          <button 
          onClick={() => this.PageChange(page)} className="page-link" >{page}</button></li>
          
          {(page === paginationRowLength && previousPageTop-1 === paginationRowLength) && 
          <li className="page-item disabled"><button className="page-link">..</button></li> }
          </React.Fragment>
        )}     
    
                  { currentPage < totalPages &&
                <li>
                  <button 
                  onClick= { () => 
                    (previousPages.indexOf(currentPage+1) === -1) ? this.NextPageChange(currentPage+1) : this.PageChange(currentPage+1) }  
                  className="page-link" >
                    next
                    </button>
                    </li>}
        </ul>
      </nav> 
    

        
      )
   
  }


}



 
export default Pagination;