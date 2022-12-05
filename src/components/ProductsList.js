import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const listOfProducts = useSelector((state) => state.productReducer.products);

  return (
    <div className="col-sm-12 col-md-8">
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>Libelle</th>
            <th>Prix en ttc</th>
            <th>En stock</th>
            <th>Is gift</th>
          </tr>
        </thead>
        <tbody>
          {listOfProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
