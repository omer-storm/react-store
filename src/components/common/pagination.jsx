// import _ from "lodash"



const Pagination = ({itemsCount,itemsPerPage,onPageChange, currentPage, previousPages, previousPageTop, onNextPageChange}) => {
    const totalPages = Math.ceil(itemsCount/itemsPerPage)
    if(totalPages === 1) return null
    // const pages = _.range(1,totalPages+1)
    return ( 
    <nav aria-label="Page navigation">
    <ul className="pagination justify-content-center">
    {<li className= {(currentPage === 1 ) ? "page-item disabled": "page-item"}>
       <button onClick={() => (currentPage > 1 ) && onPageChange(currentPage-1)} className="page-link" >previous</button>
       </li>}

    {previousPages.map((page) => 
    <li 
    key={page}
    className={(page !== currentPage)? "page-item": "page-item active"
    }>
      <button 
      onClick={() => onPageChange(page)} className="page-link" >{page}</button></li>
    )}     

              { currentPage < totalPages &&
            <li>
              <button 
              onClick= { () => 
                (previousPages.indexOf(currentPage+1) === -1) ? onNextPageChange(previousPageTop+1) : onPageChange(currentPage+1) }  
              className="page-link" >
                next
                </button>
                </li>}
    </ul>
  </nav> 
  );
}
 
export default Pagination;