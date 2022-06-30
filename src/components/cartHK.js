import React from "react";

function cartHK({ item }) {
  return (
    // <pre>{JSON.stringify(item, null, 2)}</pre>

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
        {item.map((item, index) => (
          <tr key={index}>
            <td>
              <img
                src={item.image}
                alt="Card cap"
                height={135}
                width={200}
              />
            </td>
            <td>
              <h6 style={{ margin: 20, marginTop: 40 }}>{item.qty}</h6>
            </td>
            <td>
              <h6 style={{ margin: 20, marginTop: 40 }}>${item.price * item.qty}</h6>
            </td>
            <td>
              <button style={{ margin: 20, marginTop: 40 }} className="btn btn-sm btn-danger">
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
