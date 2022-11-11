import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Pagination from "../components/common/Pagination";
import Item from "../components/mainStore/Item";
import Cart from "../components/mainStore/Cart";
import ListGroup from "../components/mainStore/CategoryListGroup";
import Purchase from "../components/mainStore/Purchase";
import {
  setTotalpages,
  setItems,
} from "../features/mainStore/pagination/paginationSlice";
import { useSelector, useDispatch } from "react-redux";

function MainStore() {
  const { filteredItems } = useSelector((state) => state.items);
  const { items } = useSelector((state) => state.pagination);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalpages(filteredItems.length));
    dispatch(setItems(filteredItems));
  }, [dispatch, filteredItems]);

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="App col-8">
          <div className="col-4">
            <ListGroup />
          </div>
          <br />
          <div className="row">
            {items.map((item) => (
              <Item key={item.iid} item={item} />
            ))}
            <Pagination />
          </div>
        </div>

        <div className="col-4">
          {cartItems.length !== 0 && <Cart />}
          {cartItems.length !== 0 && <Purchase />}
        </div>
      </div>
    </div>
  );
}

export default MainStore;
