import Like from "./common/like";
import React from "react";

const Items = ({ item, onAddToCart, lastSelectedItemAction }) => {
  return (
    <div className="col-4">
      <div className="card">
        <img
          className="card-img-top"
          src={item.image}
          alt="Card cap"
          height={200}
          width={200}
        ></img>
        <div className="card-body">
          <Like status={item.like[0] ? true : false} id={item._id} />
          {lastSelectedItemAction.id === item.iid && (
            <div
              className={
                lastSelectedItemAction.action === "addToCart"
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
              style={{ height: 10 }}
            >
              <p style={{ marginTop: -10 }}>{
                lastSelectedItemAction.action === "addToCart"
                  ? "Added To Cart"
                  : "Removed From Cart"
              }</p>
            </div>
          )}
          <h5 className="card-title"> {item.item} </h5>
          <h6 className="card-text m-2">
            Price: ${item.price} || Quantity: {item.quantity}
          </h6>
          <p className="card-text"> {item.author}</p>
          <button
            onClick={() => onAddToCart(item)}
            className="btn btn-primary btn-sm"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
