import React from "react";
import style from "./rules.module.css";
import Head from "../../components/Head/Head";
import FooterSector from "../../Layouts/MainLayout/FooterSector/FooterSector";
import RulesSector from "../../components/RulesSector/RulesSector";

const Rules = () => {
  return (
    <>
      <div className={style.rules_container}>
        <RulesSector />
      </div>
    </>
  );
};

export default Rules;
