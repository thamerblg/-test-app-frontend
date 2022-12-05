import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductsList from "../components/ProductsList";
import { getAllProducts } from "../JS/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getAllProducts());
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="container mt-5">
      <div className="title text-center">
        <h1 className="display-5">
          <strong>Product Manager</strong>
        </h1>
      </div>
      <div className="main row">
        <AddProduct />
        <ProductsList />
      </div>
      <button className="btn btn-light text-primary ml-4">
        <Link to={"/"}>Back to home</Link>
      </button>
    </div>
  );
};

export default Products;
