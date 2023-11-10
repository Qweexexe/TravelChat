import React from "react";
import style from "./rules-sector.module.css";

const RulesSector = () => {
  return (
    <div className={style.rule}>
      <div className={style.rules_wrap}>
        <div className={style.rules_head}>Rules of conduct on the Site</div>
        <section className={style.rules_text}>
          <ol className={style.rules_list}>
            <li className={style.rules_list_item}>
              Communication on the Site is based on the principles of generally
              accepted morality and network etiquette, respect for the honor and
              dignity of participants, inadmissibility of discrimination on any
              grounds, mutual respect, and equal opportunities for Site users.
            </li>
            <li className={style.rules_list_item}>
              When quoting other people's messages, leave only what is necessary
              to understand your answer. Avoid over-quoting. When citing, remove
              links to pictures and videos. When responding to the last message
              - do not quote it. If you are not active in the Forum for a long
              time, your account may be deleted at the discretion of the
              Administration.
            </li>
            <li className={style.rules_list_item}>
              With any use of the materials of our Site on other sites, a
              mandatory hyperlink to “https://travel-chat.netlify.app/”, calling
              us “Travel-chat” or “Travel with Pleasure” and compliance with the
              rules, established by the Law of Ukraine "On Copyright and Related
              Rights", without using noindex tags and nofollow attributes.
            </li>
            <li className={style.rules_list_item}>
              Comments that violate the rules of conduct on the Kurkul.com
              website will be deleted without warning. In the case of secondary
              posting of an already deleted message, the moderator has the right
              to block ("ban") the user;
            </li>
          </ol>
          <article>
            The site administration reserves the right not to publish materials
            (messages, posts, articles, photos, videos and text advertising and
            informational materials, etc.) that contain signs of inauthenticity,
            may in some way harm the interests of readers, in relation to which
            a conflict of interests with other published materials or authors.
            Also, the site administration may refuse to publish other
            information if the materials provided by the customer/author can be
            mistakenly identified by readers (site audience) with other
            materials published on the Site or by their authors. <br /> <br />{" "}
            Prohibited:
          </article>
          <ol className={style.rules_list}>
            <li className={style.rules_list_item}>
              registration of a login similar to an existing one, which may lead
              to misleading other participants;
            </li>
            <li className={style.rules_list_item}>
              using the address of Internet resources as a login (this will be
              equated to unwanted advertising, spam);
            </li>
            <li className={style.rules_list_item}>
              use of avatars containing obscene images, as well as images that
              may be offensive to other users of the Site;
            </li>
            <li className={style.rules_list_item}>
              links to third-party resources (not related to the content of the
              Site) and any advertising of third-party resources without prior
              agreement with the Administrators;
            </li>
            <li className={style.rules_list_item}>
              multiple registration of one user, regardless of the purpose for
              which such registration is carried out;
            </li>
            <li className={style.rules_list_item}>
              use of obscene words, insults, offensive expressions, regardless
              of in what form and to whom they were addressed, and regardless of
              whether all signs were written with letters or with the
              replacement of individual letters with symbols;
            </li>
            <li className={style.rules_list_item}>
              transition to personalities, insults of official and public
              figures (including the deceased), rude statements, insults and
              humiliation of other commenting participants, their relatives or
              relatives;
            </li>
            <li className={style.rules_list_item}>
              publication of knowingly false, unverified, slanderous
              information;
            </li>
            <li className={style.rules_list_item}>
              assignment of other people's names and surnames, commenting on
              behalf of others;
            </li>
            <li className={style.rules_list_item}>
              dissemination of personal data, violation of confidentiality of
              correspondence and communication.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RulesSector;
