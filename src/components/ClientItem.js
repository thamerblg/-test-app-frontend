import React from "react";

const ClientItem = ({ client }) => {
  return (
    <tr>
      <td>{client.nom_complet}</td>
      <td>{client.nbr_gifts}</td>
      <td>{client.remise_defaut}</td>
    </tr>
  );
};

export default ClientItem;
