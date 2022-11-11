import React, { useEffect } from "react";
import Item from "./Item";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
import Purchase from "./Purchase";
import {
  getCategories,
  setSelectedCategory,
} from "../features/mainStore/categories/categorySlice";
import { getFilteredItems } from "../features/mainStore/items/itemSlice";
import {
  setTotalpages,
  setItems,
} from "../features/mainStore/pagination/paginationSlice";
import { useSelector, useDispatch } from "react-redux";

function MainStore() {

  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const { filteredItems } = useSelector((state) => state.items);
  const { items } = useSelector((state) => state.pagination);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();



  const handleFilter = (category) => {
    dispatch(setSelectedCategory(category));
    dispatch(getFilteredItems(category));
  };

  useEffect(() => {
    dispatch(getFilteredItems(selectedCategory));
    dispatch(getCategories());
  }, [dispatch, selectedCategory]);

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
            <ListGroup
              onFilter={handleFilter}
              categories={categories}
              selectedCategory={selectedCategory}
            />
          </div>
          <br />
          <div className="row">
            {items.map((item) => (
              <Item
                key={item.iid}
                item={item}
              />
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
