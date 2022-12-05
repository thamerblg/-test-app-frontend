import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../JS/actions/clientActions";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const listOfClients = useSelector((state) => state.clientReducer.clients);

  const [clientSelected, setClientSelected] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChoose = (e) => {
    e.preventDefault();
    const loggedClient = { nom_complet: clientSelected };
    dispatch(login(loggedClient, navigate));
  };

  return (
    <>
      <h1>Authentification</h1>
      <form onSubmit={(e) => handleChoose(e)}>
        <label className="form-label">Choose your client from the list:</label>
        <select
          value={clientSelected}
          onChange={(e) => setClientSelected(e.target.value)}
        >
          {listOfClients.map((item) => (
            <option key={item._id} value={item.nom_complet}>
              {item.nom_complet}
            </option>
          ))}
        </select>
        <input type="submit" name="submit" value="login" />
      </form>
    </>
  );
};

export default Auth;
