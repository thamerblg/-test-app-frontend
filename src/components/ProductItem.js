import React from "react";

const ProductItem = ({ product }) => {
  console.log(typeof product.is_gift);
  return (
    <tr>
      <td>{product.libelle}</td>
      <td>{product.prix_ttc}</td>
      <td>{String(product.en_stock)}</td>
      <td>{String(product.is_gift)}</td>
    </tr>
  );
};

export default ProductItem;
