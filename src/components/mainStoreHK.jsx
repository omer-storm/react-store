import React, { useEffect, useState } from "react";
import Items from "./items";
import Navbar from "./navbar";
import Pagination from "./common/paginationHK";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import axios from "axios";
import Cart from "./cartHK";

function MainStoreHK() {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("books");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsCount, setItemsCount] = useState(1);
  const [cartItem, setCartItem] = useState([]);
  const [itemID, setitemID] = useState(-1);

  const itemsPerPage = 6;

  const pageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = (category) => {
    setCurrentPage(1);
    setSelectedCategory(category);
  };

  const addToCart = (item) => {
    let prevItem = cartItem.filter((i) => item.iid === i.iid);
    if (item.quantity !== 0) {
      if (prevItem.length === 0) {
        cartItem.push({ ...item, qty: 1 });
        setCartItem(cartItem);
        setitemID({ id: item.iid, qty: 1 });
      } else {
        const index = cartItem.indexOf(prevItem[0]);
        cartItem[index].qty++;
        setCartItem(cartItem);
        setitemID({ id: item.iid, qty: cartItem[index].qty });
      }
      const index = items.indexOf(item);
      items[index].quantity--;
      setItems(items);
    }
  };

  useEffect(() => {
    axios.get(`/api/items/`).then((items) => {
      setAllItems(items.data);
    });
  }, []);

  useEffect(() => {
    const filter = allItems.filter((i) => i.category === selectedCategory);
    setItemsCount(filter.length);
    setItems(paginate(filter, currentPage, itemsPerPage));
  }, [currentPage, selectedCategory, allItems]);

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="App col-8">
          <div className="col-4">
            <ListGroup onFilter={handleFilter} />
          </div>
          <br />
          <div className="row">
            {items.map((item) => (
              <Items key={item.iid} item={item} onAddToCart={addToCart} />
            ))}
          </div>
        </div>

        <div className="col-4">{itemID !== -1 && <Cart item={cartItem} />}</div>

        <Pagination
          onPageChange={pageChange}
          itemsCount={itemsCount}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
}

export default MainStoreHK;
