import React from "react";

function Footer() {
  return (
    <footer className="border-top pt-5 pb-2 bg-light">
      {/* CENTERED CONTAINER */}
      <div className="container">
        <div className="row gy-4 mx-5">
          {/* LEFT SECTION */}
          <div className="col-md-3">
            <img
              src="media/Images/logo.svg"
              alt="logo"
              style={{ width: "150px" }}
            />

            <p className="text-muted mt-3 small">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-4 my-4 fs-5 text-muted">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>

            <hr className="w-75" />

            {/* SECOND ROW ICONS */}
            <div className="d-flex gap-4 fs-5 text-muted my-4">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>

            {/* APP BUTTONS */}
            <div className="d-flex gap-3">
              <img
                src="media/Images/googlePlayBadge.svg"
                alt="google play"
                style={{ width: "40%" }}
              />

              <img
                src="media/Images/appstoreBadge.svg"
                alt="app store"
                style={{ width: "40%" }}
              />
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="col-md-2">
            <h5 className="fw-semibold mb-3">Account</h5>

            <div className="d-flex flex-column gap-2 text-muted small">
              <span className="mb-2">Commodity</span>
              <span className="mb-2">Open demat account</span>
              <span className="mb-2">Minor demat account</span>
              <span className="mb-2">NRI demat account</span>
              <span className="mb-2">HUF demat account</span>
              <span className="mb-2">Dematerialisation</span>
              <span className="mb-2">MTF</span>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="col-md-2">
            <h5 className="fw-semibold mb-3">Support</h5>

            <div className="d-flex flex-column gap-2 text-muted small">
              <span className="mb-2">Contact us</span>
              <span className="mb-2">Support portal</span>
              <span className="mb-2">How to file a complaint?</span>
              <span className="mb-2">Status of your complaints</span>
              <span className="mb-2">Bulletin</span>
              <span className="mb-2">Circular</span>
              <span className="mb-2">Z-Connect blog</span>
              <span className="mb-2">Downloads</span>
            </div>
          </div>

          {/* COMPANY */}
          <div className="col-md-2">
            <h5 className="fw-semibold mb-3">Company</h5>

            <div className="d-flex flex-column gap-2 text-muted small">
              <span className="mb-2">About</span>
              <span className="mb-2">Philosophy</span>
              <span className="mb-2">Press & media</span>
              <span className="mb-2">Careers</span>
              <span className="mb-2">Zerodha Cares (CSR)</span>
              <span className="mb-2">Zerodha.tech</span>
              <span className="mb-2">Open source</span>
              <span className="mb-2">Referral program</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-3">
            <h5 className="fw-semibold mb-3">Quick links</h5>

            <div className="d-flex flex-column gap-2 text-muted small">
              <span className="mb-2">Upcoming IPOs</span>
              <span className="mb-2">Brokerage charges</span>
              <span className="mb-2">Market holidays</span>
              <span className="mb-2">Economic calendar</span>
              <span className="mb-2">Calculators</span>
              <span className="mb-2">Markets</span>
              <span className="mb-2">Sectors</span>
              <span className="mb-2">Gift Nifty</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 px-5">
        <div className="row">
          <div className="col small text-muted">
            <p className="mb-3 para-text">
              Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              <span className="text-primary"> complaints@zerodha.com</span>, for
              DP related to{" "}
              <span className="text-primary"> dp@zerodha.com</span>. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p className="mb-3 para-text">
              Procedure to file a complaint on{" "}
              <span className="text-primary para-text">SEBI SCORES</span>: Register on
              SCORES portal. Mandatory details for filing complaints on SCORES:
              Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p className="mb-3 text-primary para-text">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p className="mb-3 para-text">
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p className="mb-3 para-text">
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p className="mb-3 para-text">
              India's largest broker based on networth as per NSE.
              <span className="text-primary para-text"> NSE broker factsheet</span>
            </p>

            <p className="mb-3 para-text">
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please{" "}
              <span className="text-primary para-text">create a ticket here</span>.
            </p>

            <p className="mb-2 para-text">
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>

            {/* Bottom links */}
            <div className="d-flex flex-wrap gap-4 py-2 text-muted justify-content-center align-items-center span-bold">
              <span>NSE</span>
              <span>BSE</span>
              <span>MCX</span>
              <span>Terms & conditions</span>
              <span>Policies & procedures</span>
              <span>Privacy policy</span>
              <span>Disclosure</span>
              <span>For investor's attention</span>
              <span>Investor charter</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
