import React from "react";
import { Link } from "react-router-dom";
import AddClient from "../components/AddClient";
import ClientsList from "../components/ClientsList";

const Clients = () => {
  return (
    <div className="container mt-5">
      <div className="title text-center">
        <h1 className="display-5">
          <strong>Client Manager</strong>
        </h1>
      </div>
      <div className="main row">
        <AddClient />
        <ClientsList />
      </div>

      <button className="btn btn-light text-primary ml-4">
        <Link to={"/"}>Back to home</Link>
      </button>
    </div>
  );
};

export default Clients;
