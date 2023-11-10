import React from "react";
import style from "./privacy-policy.module.css";
import Head from "../../components/Head/Head";
import ContactsSector from "../../Layouts/MainLayout/ContactsSector/ContactsSector";
import FooterSector from "../../Layouts/MainLayout/FooterSector/FooterSector";
import PrivacyPolicySector from "../../components/PrivacyPolicySector/PrivacyPolicySector";

const PrivacyPolicy = () => {
  return (
    <>
      <div className={style.privacy_policy}>
        <PrivacyPolicySector />
        <ContactsSector />
      </div>
    </>
  );
};

export default PrivacyPolicy;
