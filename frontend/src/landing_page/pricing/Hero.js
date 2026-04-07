import React from "react";

function Hero() {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="container text-center pt-5 mt-5">
        
        <h2 className="text-muted fw-normal pt-5">
          Charges
        </h2>

        <p className="text-muted fs-5 my-3">
          List of all charges and taxes
        </p>

      </div>


     
      <div className="container text-center pt-5 my-5">

        <div className="row justify-content-center">

          {/* CARD 1 */}
          <div className="col-md-4 mb-5">
            <img src="media\Images\pricing0.svg" alt="₹0" style={{ width: "70%" }} />
            <h3 className="mt-3">Free equity delivery</h3>
            <p className="text-muted mt-3 fs-5" style={{ lineHeight: "1.8" }}>
              All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4 mb-5">
            <img src="media\Images\pricing20.svg" alt="₹20" style={{ width: "70%" }} />
            <h3 className="mt-3">Intraday and F&O trades</h3>
            <p className="text-muted mt-3 fs-5" style={{ lineHeight: "1.8" }}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4 mb-5">
            <img src="media\Images\pricing0.svg" alt="₹0" style={{ width: "70%" }} />
            <h3 className="mt-3">Free direct MF</h3>
            <p className="text-muted mt-3 fs-5" style={{ lineHeight: "1.8" }}>
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Hero;