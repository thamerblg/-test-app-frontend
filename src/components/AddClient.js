import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewClient } from "../JS/actions/clientActions";

const AddClient = () => {
  const [nomComplet, setNomComplet] = useState("");
  const [nombreGifts, setNombreGifts] = useState("");
  const [remiseDefaut, setRemiseDefaut] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      nom_complet: nomComplet,
      nbr_gifts: nombreGifts,
      remise_defaut: remiseDefaut,
    };
    dispatch(addNewClient(newClient));
    setNomComplet("");
    setNombreGifts("");
    setRemiseDefaut("");
  };

  return (
    <div className="col-sm-12 col-md-4">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Nom complet</label>
          <input
            type="text"
            className="form-control"
            value={nomComplet}
            onChange={(e) => setNomComplet(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nombre de gifts</label>
          <input
            type="number"
            min="0"
            step="1"
            className="form-control"
            value={nombreGifts}
            onChange={(e) => setNombreGifts(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Remise defaut</label>
          <input
            type="number"
            min="0"
            className="form-control"
            value={remiseDefaut}
            onChange={(e) => setRemiseDefaut(e.target.value)}
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

export default AddClient;
