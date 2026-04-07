import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";

function ProductPage() {
  return (
    <>
    <Hero/>
    <div className="container">

      {/* KITE */}
      <LeftSection
        image="media/Images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, and an elegant UI."
        link="Learn more"
        googlePlay="media/Images/googlePlayBadge.svg"
        appStore="media/Images/appstoreBadge.svg"
      />

      {/* CONSOLE */}
      <RightSection
        image="media/Images/console.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments."
        link="Learn more"
      />

      {/* COIN */}
      <LeftSection
        image="media/Images/coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account."
        link="Coin"
        googlePlay="media/Images/googlePlayBadge.svg"
        appStore="media/Images/appstoreBadge.svg"
      />

      {/* KITE CONNECT */}
      <RightSection
        image="media/Images/kiteconnect.png"
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple APIs."
        link="Kite Connect"
      />

      {/* VARSITY */}
      <LeftSection
        image="media/Images/varsity.png"
        title="Varsity mobile"
        description="An easy to grasp collection of stock market lessons with in-depth coverage."
        link="Varsity"
        googlePlay="media/Images/googlePlayBadge.svg"
        appStore="media/Images/appstoreBadge.svg"
      />

    </div>
    <Universe/>
    </>
  );
}

export default ProductPage;