import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  quantityDecrement,
  quantityIncrement,
  addQuantityAmount,
} from "../features/mainStore/items/itemSlice";
import {
  incQty,
  decQty,
  removeFromCart,
} from "../features/mainStore/cart/cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const { filteredItems } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const incClick = (item) => {
    if (item.quantity !== 0) {
      dispatch(incQty(cartItems.indexOf(item)));
      dispatch(
        quantityDecrement(
          filteredItems.indexOf(
            filteredItems.find((filteredItem) => filteredItem._id === item._id)
          )
        )
      );
    }
  };

  const decClick = (item) => {
    if (item.qty > 1) {
      dispatch(decQty(cartItems.indexOf(item)));
      dispatch(
        quantityIncrement(
          filteredItems.indexOf(
            filteredItems.find((filteredItem) => filteredItem._id === item._id)
          )
        )
      );
    }
  };

  const removeCartClick = (item) => {
    dispatch(removeFromCart(item));
    dispatch(
      addQuantityAmount({
        index: filteredItems.indexOf(
          filteredItems.find((filteredItem) => filteredItem._id === item._id)
        ),
        qty: item.qty,
      })
    );
  };

  return (
    // <pre>{JSON.stringify(items, null, 2)}</pre>

    <table style={{ marginTop: 110 }} className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td>
              <img src={item.image} alt="Card cap" height={135} width={200} />
            </td>
            <td style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ marginTop: 50 }}
                onClick={() => decClick(item)}
                className="btn btn-success btn-sm"
              >
                -
              </button>
              <h6 style={{ margin: 7.5, marginTop: 50, fontSize: 20 }}>
                {item.qty}
              </h6>
              <button
                style={{ marginTop: 50 }}
                onClick={() => incClick(item)}
                className="btn btn-success btn-sm"
              >
                +
              </button>
            </td>
            <td>
              <h6 style={{ margin: 20, marginTop: 50 }}>
                ${item.price * item.qty}
              </h6>
            </td>
            <td>
              <button
                style={{ margin: 20, marginTop: 50 }}
                onClick={() => removeCartClick(item)}
                className="btn btn-sm btn-danger"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Cart;
