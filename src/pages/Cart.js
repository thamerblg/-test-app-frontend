import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decreaseToCart,
  deleteFromCart,
  incrementToCart,
} from "../JS/actions/cartActions";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cartReducer.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hundleAdd = (product) => {
    dispatch(incrementToCart(product));
  };
  const hundleMinus = (product) => {
    dispatch(decreaseToCart(product));
  };

  const handleDelete = (product) => {
    dispatch(deleteFromCart(product));
  };

  const handleGoBackBtn = () => {
    navigate(-1);
  };

  return (
    <>
      {cartProduct.length > 0 ? (
        <div className="col-sm-12 col-md-10 col-md-offset-1 mx-auto mt-5">
          <h2>
            You have{" "}
            {cartProduct.length === 1
              ? "1 item"
              : `(${cartProduct.length}) Items`}
          </h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Libelle</th>
                <th>Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Total</th>
                <th className="text-center">en stock</th>
                <th className="text-center">is Gift</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {cartProduct.map((item) => (
                <tr key={item._id}>
                  <td className="col-sm-8 col-md-3">
                    <div className="media">
                      <img
                        className="media-object"
                        src="https://via.placeholder.com/75x75"
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="col-md-2 text-left">
                    <strong className="label label-danger">
                      {item.libelle}
                    </strong>
                  </td>
                  <td
                    className="col-sm-1 col-md-1"
                    style={{ textAlign: "center" }}
                  >
                    {/*<input
                      type="number"
                      className="form-control"
                      min={1}
                      value={item.count}
                      onChange={(e) => handleQtyChange(e, item)}
                    />*/}
                    <button
                      className="minus-btn px-2"
                      type="button"
                      onClick={() => hundleMinus(item)}
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.count}
                      readOnly="readonly"
                    />
                    <button
                      className="plus-btn px-2"
                      type="button"
                      onClick={() => hundleAdd(item)}
                    >
                      <FaPlus />
                    </button>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>{item.priceWithGift}</strong>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>
                      {item.total === 1
                        ? item.priceWithGift * item.count
                        : item.total}
                    </strong>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>{String(item.en_stock)}</strong>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>{String(item.is_gift)}</strong>
                  </td>
                  <td className="col-sm-1 col-md-2 text-end">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(item)}
                    >
                      <span className="fa fa-remove" /> Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="col-lg-12 p-2">
            <div className="totals-item d-flex justify-content-end">
              <p className="font-weight-bold text-uppercase mr-2">Subtotal:</p>
              <div className="totals-value" id="cart-subtotal">
                {cartProduct.reduce(
                  (currentSum, currentCartItem) =>
                    currentSum +
                    currentCartItem.priceWithGift * currentCartItem.count,
                  0
                )}
              </div>
            </div>
          </div>
          <button
            className="btn btn-light text-primary ml-4"
            onClick={handleGoBackBtn}
          >
            Return to the store
          </button>
        </div>
      ) : (
        <>
          <p>cart est vide</p>
          <button
            className="btn btn-light text-primary ml-4"
            onClick={handleGoBackBtn}
          >
            Go Back
          </button>
        </>
      )}
    </>
  );
};

export default Cart;
