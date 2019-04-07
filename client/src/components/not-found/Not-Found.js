import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="container pt-5" style={{ marginBottom: "450px" }}>
      <Link to="/">&larr; Back home</Link>
      <h1 className="display-4">Page Not Found</h1>
      <p>Sorry, this page doesn't exist</p>
    </div>
  );
};
