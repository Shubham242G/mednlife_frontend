import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import DefenceAgainstMedicalNegligence from "./DefenceOfNegligence";
import DueDiligenceAndValuation from "./DueDiligenceAndValuation";
import LaborLawCompliance from "./LaborLawCompliance";

const ServicePage = () => {

  return (
    <div>
      <DefenceAgainstMedicalNegligence/>
      <DueDiligenceAndValuation/>
      <LaborLawCompliance/>
    </div>
  );
};

export default ServicePage;
