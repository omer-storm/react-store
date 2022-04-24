const ListGroup = ({onFilter}) => {
    return ( 
        <div className="list-group">
  <button onClick={()=> onFilter("books")  } className="list-group-item list-group-item-action active">
    Books
  </button>
  <button onClick={()=> onFilter("music")  } className="list-group-item list-group-item-action">Music</button>
</div>
     );
}
 
export default ListGroup;