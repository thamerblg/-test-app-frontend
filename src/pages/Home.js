import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <button className="btn btn-light text-primary m-4">
        <Link to="/clients">Clients management</Link>
      </button>
      <button className="btn btn-light text-primary m-4">
        <Link to="/products">Products management</Link>
      </button>
      <button className="btn btn-light text-primary m-4">
        <Link to="/store">Store</Link>
      </button>
    </>
  );
};

export default Home;
