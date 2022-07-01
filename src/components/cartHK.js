import React from "react";

function cartHK({ items, onRemoveFromCart, onCounterAction }) {
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
        {items.map((item, index) => (
          <tr key={index}>
            <td>
              <img src={item.image} alt="Card cap" height={135} width={200} />
            </td>
            <td style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ marginTop: 50 }}
                onClick={() => onCounterAction(item, "dec")}
                className="btn btn-success btn-sm"
              >
                -
              </button>
              <h6 style={{ margin: 7.5, marginTop: 50, fontSize: 20 }}>
                {item.qty}
              </h6>
              <button
                style={{ marginTop: 50 }}
                onClick={() => onCounterAction(item, "inc")}
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
                onClick={() => onRemoveFromCart(item)}
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

export default cartHK;
