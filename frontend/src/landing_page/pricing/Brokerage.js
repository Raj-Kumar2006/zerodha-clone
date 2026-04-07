import React from "react";

function Brokerage() {
  return (
    <div className="container pb-5">
      {/* TOP LINK */}
      <p className="text-center mb-5 fs-4 pb-5">
        <span className="text-primary fw-normal">
          Calculate your costs upfront
        </span>{" "}
        using our brokerage calculator
      </p>

      {/* SECTION 1 */}
      <h3 className="mb-4">Charges for account opening</h3>

      <div className="table-responsive mb-5">
        <table className="table border">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th className="text-end">Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Online account</td>
              <td className="text-end">
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>

            <tr>
              <td>Offline account</td>
              <td className="text-end">
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>

            <tr>
              <td>NRI account (offline only)</td>
              <td className="text-end">₹ 500</td>
            </tr>

            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="text-end">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 2 */}
      <h3 className="mb-4">Demat AMC (Annual Maintenance Charge)</h3>

      <div className="table-responsive mb-3">
        <table className="table border">
          <thead className="table-light">
            <tr>
              <th>Value of holdings</th>
              <th className="text-end">AMC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td className="text-end">
                <span className="badge bg-success">FREE*</span>
              </td>
            </tr>

            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td className="text-end">₹100 per year</td>
            </tr>

            <tr>
              <td>Above ₹10 lakh</td>
              <td className="text-end">₹300 per year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-muted small mb-5">
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA).
      </p>

      {/* SECTION 3 */}
      <h3 className="mb-4">Charges for optional value added services</h3>

      <div className="table-responsive">
        <table className="table border">
          <thead className="table-light">
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th className="text-end">Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td className="text-end">Free: 0 | Pro: 249/2399</td>
            </tr>

            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td className="text-end">Buy & Invest More: 100 | SIP: 10</td>
            </tr>

            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td className="text-end">Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* DISCLAIMER */}
      <div className="mt-5">
        <h5 className="mb-3">Disclaimer</h5>

        <p
          className="text-muted"
          style={{ lineHeight: "1.8", fontSize: "14px" }}
        >
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
