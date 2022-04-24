const ListGroup = ({categories,selected_category,onFilter}) => {
    return ( 
        <div className="list-group">
  {categories.map( (category) =>
  <button 
  
  onClick={()=> onFilter(category)  } 
  className= {(category === selected_category) ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action "}>
    {category}
  </button>
  )}
</div>
     );
}
 
export default ListGroup;