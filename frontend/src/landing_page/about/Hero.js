import React from "react";

function Hero() {
  return (
    <div className="container my-5 pt-2">
      <div className="text-center py-5 my-5">
        <h3 className="fw-semibold">
          We pioneered the discount broking model in India.
        </h3>

        <h3 className="fw-semibold">
          Now, we are breaking ground with our technology.
        </h3>
      </div>

      <div className="container my-5 px-5">
        <div className="row border-top">
          {/* LEFT COLUMN */}
          <div className="col-md-6 pe-4 p-5">
            <p className="text-muted" style={{ lineHeight: "1.8" }}>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p className="text-muted" style={{ lineHeight: "1.8" }}>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p className="text-muted" style={{ lineHeight: "1.8" }}>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6 ps-4 p-5">
            <p className="text-muted" style={{ lineHeight: "1.8" }}>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>

            <p className="text-muted" style={{ lineHeight: "1.8" }}>
              <span className="text-primary">Rainmatter</span>, our fintech fund
              and incubator, has invested in several fintech startups with the
              goal of growing the Indian capital markets.
            </p>

            <p className="text-muted" style={{ lineHeight: "1.8" }}>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <span className="text-primary">blog</span> or see what the media
              is
              <span className="text-primary"> saying about us</span> or learn
              more about our business and product{" "}
              <span className="text-primary">philosophies</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
