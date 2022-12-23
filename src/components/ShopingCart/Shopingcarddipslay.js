//this section down by venkateswara rao
import React from "react";
import { connect } from "react-redux";
import "./ShopingCard.css";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../../redux/actions/Carditemaction.js";

const Shopingcarddipslay = ({
  items,
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
}) => {
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
            <thead className="bg-primary text-white">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {ListCart.map((item, key) => (
                <tr key={key}>
                  <td className="d-flex border">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="align-start"
                      style={{
                        height: "75px",
                        width: "75px",
                        objectFit: "cover",
                      }}
                    />
                    <p className="align-center pt-4 title-card-name d-inline-block">
                      {item.name}
                    </p>
                  </td>
                  <td className="align-middle">${item.price}</td>
                  <td className="align-middle">
                    <div
                      className="input-group quantity mx-auto"
                      style={{ width: "100px" }}
                    >
                      <div className="input-group-btn">
                        <button
                          onClick={() => DecreaseQuantity(key)}
                          className="buttons-decrese-quantity"
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <h1
                        type="text"
                        className="quantity-showing"
                        value={item.quantity}
                      >
                        {item.quantity}
                      </h1>
                      <div className="input-group-btn">
                        <button
                          onClick={() => IncreaseQuantity(key)}
                          className="buttons-increse-quantity"
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">
                    ${TotalPrice(item.price, item.quantity)}
                  </td>
                  <td className="align-middle">
                    <button
                      onClick={() => DeleteCart(key)}
                      className="card-deleted-button"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          {/* <form className="mb-5" action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Coupon Code"
              />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form> */}
          <div className="card border-info mb-5">
            <div className="card-header bg-info border-0">
              <h4 className="font-weight-bold text-white m-0">Cart Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium">${TotalCart}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$10</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">${TotalCart + 10}</h5>
              </div>
              <button className="btn-block checkout_button my-3 py-3">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state._cardProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Shopingcarddipslay);
