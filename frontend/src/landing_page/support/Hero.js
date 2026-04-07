import React from "react";

function Hero() {
  return (
    <div className="support-hero">

      <div className="container px-5 pt-5">

        {/* TOP BAR */}
        <div className="support-top">
          <h1 className="text-muted">Support Portal</h1>

          <button className="ticket-btn">
            My tickets
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="search-wrapper">

          <i className="fa-solid fa-magnifying-glass search-icon"></i>

          <input
            type="text"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            className="search-input"
          />

        </div>

      </div>

    </div>
  );
}

export default Hero;