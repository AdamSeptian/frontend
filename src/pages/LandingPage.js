import React from "react";
import ComLandingPage from "../components/ComLandingPage";
import LayoutLandingPage from "../components/LayoutLandingPage";

const LandingPage = () => {
  return (
    <div>
      <LayoutLandingPage>
        <ComLandingPage />
      </LayoutLandingPage>
    </div>
  );
};

export default LandingPage;
