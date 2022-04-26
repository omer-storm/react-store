// import _ from "lodash"
import React from "react";


const Pagination = ({itemsCount,itemsPerPage,onPageChange, currentPage, previousPages, rowLength, previousPageTop, onNextPageChange, onPreviousPageChange}) => {
    console.log(previousPageTop)
    const totalPages = Math.ceil(itemsCount/itemsPerPage)
    if(totalPages === 1) return null
    // const pages = _.range(1,totalPages+1)
    return ( 
    <nav aria-label="Page navigation">
    <ul className="pagination justify-content-center">
    {<li className= {(currentPage === 1 ) ? "page-item disabled": "page-item"}>
       <button 
       onClick=
       {() =>
         (currentPage > 1 ) && 
         (previousPages.indexOf(currentPage-1) !== -1) ? onPageChange(currentPage-1) : onPreviousPageChange(currentPage-1)
        } 
        className="page-link" >
          previous</button>
       </li>}

    {previousPages.map((page,index) => 
    <React.Fragment key={page}>

    <li 
    className={(page !== currentPage)? "page-item": "page-item active"
    }>
      <button 
      onClick={() => onPageChange(page)} className="page-link" >{page}</button></li>
      {(index === rowLength-1 && previousPageTop-1 === rowLength) && 
      <li className="page-item disabled"><button className="page-link">..</button></li> }
      </React.Fragment>
    )}     

              { currentPage < totalPages &&
            <li>
              <button 
              onClick= { () => 
                (previousPages.indexOf(currentPage+1) === -1) ? onNextPageChange(currentPage+1) : onPageChange(currentPage+1) }  
              className="page-link" >
                next
                </button>
                </li>}
    </ul>
  </nav> 
  );
}
 
export default Pagination;