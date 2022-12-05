import React from "react";
import { useSelector } from "react-redux";
import ClientItem from "./ClientItem";

const ClientsList = () => {
  const listOfClients = useSelector((state) => state.clientReducer.clients);
  return (
    <div className="col-sm-12 col-md-8">
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>Nom complet</th>
            <th>Nombre de gifts</th>
            <th>Remise defaut</th>
          </tr>
        </thead>
        <tbody>
          {listOfClients.map((client) => (
            <ClientItem key={client._id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsList;
