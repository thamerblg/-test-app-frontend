import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../JS/actions/productActions";

const AddProduct = () => {
  const [libelle, setLibelle] = useState("");
  const [prixTtc, setPrixTtc] = useState("");
  const [enStock, setEnStock] = useState("");
  const [isGift, setIsGift] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      libelle: libelle,
      prix_ttc: prixTtc,
      en_stock: enStock,
      is_gift: isGift,
    };
    dispatch(addNewProduct(newProduct));
    setLibelle("");
    setPrixTtc("");
    setEnStock("");
    setIsGift("");
  };

  return (
    <div className="col-sm-12 col-md-4">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Libelle</label>
          <input
            type="text"
            className="form-control"
            value={libelle}
            onChange={(e) => setLibelle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>prix en ttc</label>
          <input
            type="number"
            min="0"
            step="1"
            className="form-control"
            value={prixTtc}
            onChange={(e) => setPrixTtc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Disponibilité en stock</label>
          <input
            type="Boolean"
            className="form-control"
            value={enStock}
            onChange={(e) => setEnStock(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>is gift</label>
          <input
            type="Boolean"
            className="form-control"
            value={isGift}
            onChange={(e) => setIsGift(e.target.value)}
          />
        </div>
        <input
          type="submit"
          defaultValue="Submit"
          className="btn btn-success btn-block add-btn"
        />
      </form>
    </div>
  );
};

export default AddProduct;
