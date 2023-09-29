import style from "./ContactsSector.module.css";


const ContactsSector = () => {
    return (
        <section className={style.contacts}>
            <p className={style.contacts_question}>
                Still have
                question? Just
                contact us!
            </p>
            <div className={style.contacts_info}>
                <p className={style.contacts_info}>If you have any questions about our product or have suggestions -
                    just write to us, we will definitely contact you!
                    We try to answer letters quickly. Therefore, send your request to us by mail.
                </p>
                <h3 className={style.email}>Email :</h3>
                <a href="mailto:travel.with.pleasure.2023@gmail.com" target="_blank"
                   className={style.mail_to}>travel.with.pleasure.2023@gmail.com</a>
            </div>
        </section>
    )
}


export default ContactsSector