import React from "react";

function LeftSection({ image, title, description, link, googlePlay, appStore }) {
  return (
    <div className="container py-5">

      <div className="row align-items-center justify-content-center">

        {/* LEFT IMAGE */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img src={image} alt={title} className="img-fluid" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-5 text-md-start text-center p-5">
          <h4>{title}</h4>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            {description}
          </p>

          <a href="/product" className="text-primary text-decoration-none">
            {link} →
          </a>

          {/* Store Buttons */}
          <div className="mt-3 d-flex gap-3 justify-content-md-start justify-content-center">
            {googlePlay && <img src={googlePlay} width="140px" alt="google" />}
            {appStore && <img src={appStore} width="140px" alt="appstore" />}
          </div>
        </div>

      </div>

    </div>
  );
}

export default LeftSection;