import React from "react";
import style from "./privacy-policy-sector.module.css";

const PrivacyPolicySector = () => {
  return (
    <div className={style.pp_wrap}>
      <div className={style.pp_head}>Privacy Policy</div>
      <section className={style.pp_text}>
        <article>
          The privacy of our website users is very important to us and we make
          every effort to ensure that it is protected. This policy explains how
          we use your personal information. By registering, you agree to these
          terms. <br /> <br />
          We process the following personal information of yours - registration
          data, which is stored exclusively in a database closed to third-party
          access, and all data posted in the chat, which is available to direct
          participants in the correspondence and users with administrative
          rights.
          <br />
          <br />
          We process your information to:
        </article>
        <ul className={style.pp_list}>
          <li className={style.pp_list_item}>
            to provide, maintain and improve our services according to the needs
            of users
          </li>
          <li className={style.pp_list_item}>
            develop new products and features that will benefit our users;
          </li>
          <li className={style.pp_list_item}>
            understand the motivation for using our services, which helps us
            provide and improve their operation;
          </li>
          <li className={style.pp_list_item}>
            understand how our services are used, which helps us provide and
            improve their performance;
          </li>
          <li className={style.pp_list_item}>
            to conduct marketing activities, in particular to inform users about
            additional services provided;
          </li>
          <li className={style.pp_list_item}>
            provide you with services purchased through our website;
          </li>
          <li className={style.pp_list_item}>
            handle inquiries and complaints made by you or about you in relation
            to our website;
          </li>
          <li className={style.pp_list_item}>
            detect, prevent, or otherwise remedy fraud, violations, security
            issues, or technical problems in our Services;
          </li>
          <li className={style.pp_list_item}>
            protect the rights, property and safety of ChatTravelers, our users
            and the public in accordance with the law (including disclosure of
            information to government authorities);
          </li>
          <li className={style.pp_list_item}>
            conduct research that improves our services for users and benefits
            the public;
          </li>
          <li className={style.pp_list_item}>
            fulfill obligations to our partners, such as developers and rights
            holders;
          </li>
          <li className={style.pp_list_item}>
            comply with legal requirements, in particular, investigate possible
            violations of the relevant Terms of Use;
          </li>
          <li className={style.pp_list_item}>for other purposes.</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicySector;
