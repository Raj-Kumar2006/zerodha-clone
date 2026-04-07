import React from "react";

function ProductsHero() {
  return (
    <div className="container-fluid px-0 text-center border-bottom py-5 my-5">

      <h3 className="text-muted fw-semibold mt-5">
        Zerodha Products
      </h3>

      <p className="text-muted fs-5 my-3">
        Sleek, modern, and intuitive trading platforms
      </p>

      <p className="text-muted">
        Check out our{" "}
        <a href="/product" className="text-primary text-decoration-none fw-medium">
          investment offerings →
        </a>
      </p>

    </div>
  );
}

export default ProductsHero;