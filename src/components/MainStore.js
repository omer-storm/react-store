import React, { useEffect } from "react";
import Item from "./Item";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
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
  // const [allItems, setAllItems] = useState([]);
  // const [items, setItems] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsCount, setItemsCount] = useState(1);
  // const [cartItems, setCartItems] = useState([]);
  // const [itemAction, setitemAction] = useState({});

  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const { filteredItems } = useSelector((state) => state.items);
  const { items } = useSelector((state) => state.pagination);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // const itemsPerPage = 6;

  // const formPost = async (form) => {
  //   await axios.post("/api/orders", { form, cartItems });
  //   setCartItems([]);
  //   setitemAction({});
  // };

  // const pageChange = (page) => {
  //   setCurrentPage(page);
  // };

  const handleFilter = (category) => {
    // setCurrentPage(1);
    dispatch(setSelectedCategory(category));
    dispatch(getFilteredItems(category));
  };

  // const addToCart = (item) => {
  //   let prevItem = cartItems.filter((i) => item.iid === i.iid);
  //   if (item.quantity !== 0) {
  //     if (prevItem.length === 0) {
  //       let { quantity } = item;
  //       quantity--;
  //       cartItems.push({ ...item, qty: 1, quantity });
  //     } else {
  //       const index = cartItems.indexOf(prevItem[0]);
  //       cartItems[index].qty++;
  //       cartItems[index].quantity--;
  //     }
  //     const index = items.indexOf(item);
  //     items[index].quantity--;

  //     setCartItems(cartItems);
  //     setitemAction({ id: item.iid, action: "addToCart" });
  //     setItems(items);
  //   }
  // };

  // const removeFromCart = (item) => {
  //   const index = cartItems.indexOf(item);
  //   const listItem = allItems.filter((i) => i.iid === item.iid);
  //   const indexListItem = allItems.indexOf(listItem[0]);

  //   allItems[indexListItem].quantity =
  //     allItems[indexListItem].quantity + item.qty;
  //   cartItems.splice(index, 1);

  //   setAllItems(allItems);
  //   setCartItems(cartItems);
  //   setitemAction({ id: item.iid, action: "removeFromCart" });
  // };

  // const counterAction = (item, action) => {
  //   const index = cartItems.indexOf(item);
  //   const listItem = allItems.filter((i) => i.iid === item.iid);
  //   const indexListItem = allItems.indexOf(listItem[0]);

  //   if (action === "inc" && item.quantity !== 0) {
  //     allItems[indexListItem].quantity--;
  //     cartItems[index].quantity--;
  //     cartItems[index].qty++;
  //   } else if (action === "dec" && cartItems[index].qty > 1) {
  //     allItems[indexListItem].quantity++;
  //     cartItems[index].quantity++;
  //     cartItems[index].qty--;
  //   }
  //   setAllItems(allItems);
  //   setCartItems(cartItems);
  //   setitemAction({});
  // };

  // useEffect(() => {
  //   dispatch(setTotalpages(filteredItems.length));
  // });

  useEffect(() => {
    // axios.get(`/api/items/`).then((items) => {
    //   setAllItems(items.data);
    // });
    dispatch(getFilteredItems(selectedCategory));
    dispatch(getCategories());
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    dispatch(setTotalpages(filteredItems.length));
    dispatch(setItems(filteredItems));
    // console.log(items.map)
  }, [dispatch, filteredItems]);

  // useEffect(() => {
  //   const filter = allItems.filter((i) => i.category === selectedCategory);
  //   setItemsCount(filter.length);
  //   setItems(paginate(filter, currentPage, itemsPerPage));
  // }, [currentPage, selectedCategory, allItems]);

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
                // onAddToCart={addToCart}
                // lastSelectedItemAction={itemAction}
              />
            ))}
            <Pagination />
          </div>
        </div>

        <div className="col-4">
          {cartItems.length !== 0 && <Cart />}
          {/* {cartItems.length !== 0 && <Purchase onFormPost={formPost} />} */}
        </div>
      </div>
    </div>
  );
}

export default MainStore;
