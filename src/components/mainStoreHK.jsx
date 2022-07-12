import React, { useEffect, useState } from "react";
import Items from "./items";
import Navbar from "./navbar";
import Pagination from "./common/paginationHK";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import axios from "axios";
import Cart from "./cartHK";
import Purchase from "./purchase";

function MainStoreHK() {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("books");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsCount, setItemsCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [itemAction, setitemAction] = useState({});

  const itemsPerPage = 6;

  const pageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = (category) => {
    setCurrentPage(1);
    setSelectedCategory(category);
  };

  const addToCart = (item) => {
    let prevItem = cartItems.filter((i) => item.iid === i.iid);
    if (item.quantity !== 0) {
      if (prevItem.length === 0) {
        let {quantity} = item
        quantity--
        cartItems.push({ ...item, qty: 1, quantity });
      } else {
        const index = cartItems.indexOf(prevItem[0]);
        cartItems[index].qty++;
        cartItems[index].quantity--
      }
      const index = items.indexOf(item);
      items[index].quantity--;

      setCartItems(cartItems);
      setitemAction({ id: item.iid, action: "addToCart" });
      setItems(items);
    }
  };

  const removeFromCart = (item) => {
    const index = cartItems.indexOf(item);
    const listItem = allItems.filter((i) => i.iid === item.iid);
    const indexListItem = allItems.indexOf(listItem[0]);

    allItems[indexListItem].quantity =
      allItems[indexListItem].quantity + item.qty;
    cartItems.splice(index, 1);

    setAllItems(allItems);
    setCartItems(cartItems);
    setitemAction({ id: item.iid, action: "removeFromCart" });
  };

  const counterAction = (item, action) => {

      const index = cartItems.indexOf(item);
      const listItem = allItems.filter((i) => i.iid === item.iid);
      const indexListItem = allItems.indexOf(listItem[0]);

      if (action === "inc" && item.quantity !== 0) {
        allItems[indexListItem].quantity--;
        cartItems[index].quantity--;
        cartItems[index].qty++;
      } else if(action === "dec" && cartItems[index].qty > 1) {
        allItems[indexListItem].quantity++;
        cartItems[index].quantity++;
        cartItems[index].qty--;
      }
      setAllItems(allItems);
      setCartItems(cartItems);
      setitemAction({});
    
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
              <Items
                key={item.iid}
                item={item}
                onAddToCart={addToCart}
                lastSelectedItemAction={itemAction}
              />
            ))}
          </div>
        </div>

        <div className="col-4">
          {cartItems.length !== 0 && (
            <Cart
              items={cartItems}
              onRemoveFromCart={removeFromCart}
              onCounterAction={counterAction}
            />
          )}
          {cartItems.length !== 0 && <Purchase />}
        </div>

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
