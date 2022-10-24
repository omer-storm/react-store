import Like from "./common/Like";
import React from "react";

const Item = ({ item }) => {
  return (
    <div className="col-4" style={{ marginBottom: 20 }}>
      <div className="card" style={{ paddingTop: 10 }}>
        <img
          className="card-img-top"
          src={item.image}
          alt="Card cap"
          height={200}
          width={200}
        ></img>
        <div className="card-body">
          <Like status={item.like[0] ? true : false} id={item._id} />
          {/* {lastSelectedItemAction.id === item.iid && (
            <div
            style={{paddingTop: 20} }
              className={
                lastSelectedItemAction.action === "addToCart"
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
            >
              <h6 style={{fontWeight: "normal"}}>
                {lastSelectedItemAction.action === "addToCart"
                  ? "Added To Cart"
                  : "Removed From Cart"}
              </h6>
            </div>
          )} */}
          <h5
            className="card-title"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.item}
          </h5>
          <h6 className="card-text m-2">
            Price: ${item.price} || Quantity: {item.quantity}
          </h6>
          <p className="card-text"> {item.author}</p>
          {/* <button
            onClick={() => onAddToCart(item)}
            className="btn btn-primary btn-sm"
          >
            Add to cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
