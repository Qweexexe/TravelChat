import style from "../../components/Head/Head.module.css";


const Burger = ({toggle}) => {
    return (
        <div className={style.burger} onClick={toggle}>
            <div className={style.burger_line}></div>
            <div className={style.burger_line}></div>
            <div className={style.burger_line}></div>
        </div>
    )
}

export default Burger