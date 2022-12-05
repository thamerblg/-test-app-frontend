import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent, logout } from "../JS/actions/clientActions";
import { useNavigate } from "react-router-dom";
import { addToCart, makeCartEmpty } from "../JS/actions/cartActions";

const Store = () => {
  const currentUser = useSelector((state) => state.clientReducer.currentClient);
  const productList = useSelector((state) => state.productReducer.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout(navigate));
    dispatch(makeCartEmpty());
  };

  useEffect(
    () => {
      dispatch(getCurrent());
    }, // eslint-disable-next-line
    []
  );

  const handleAddToCart = (e, prod) => {
    dispatch(addToCart(prod, currentUser));
  };

  return (
    <>
      <h1>Store</h1>
      <p>{currentUser.nom_complet} is currently logged in</p>
      <button onClick={(e) => navigate("/cart")}>view cart</button>
      <button onClick={(e) => handleLogout(e)}>Logout</button>

      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">prix ttc</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">en stock</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">is gift</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">add to cart</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((prod) => (
                      <tr key={prod._id}>
                        <th scope="row">
                          <div className="p-2">
                            <img
                              src="https://via.placeholder.com/75x75"
                              alt=""
                              className="img-fluid rounded shadow-sm"
                            />
                            <div className="mx-3 d-inline-block align-middle">
                              <h5 className="mb-0">{prod.libelle}</h5>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle">
                          <strong>{prod.prix_ttc}</strong>
                        </td>
                        <td className="align-middle">
                          <strong>{String(prod.en_stock)}</strong>
                        </td>
                        <td className="align-middle">
                          <strong>{String(prod.is_gift)}</strong>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-light text-primary ml-4"
                            onClick={(e) => handleAddToCart(e, prod)}
                          >
                            Add to the cart
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
