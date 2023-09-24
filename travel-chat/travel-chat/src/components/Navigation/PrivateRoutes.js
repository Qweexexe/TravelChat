import style from "./Routes.module.css";
import {privatelinks} from "./links";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {closeWindow} from "../redux/actions/actions";


const PublicRoutes = () => {
    const dispatch = useDispatch()
    return (
        <div className={style.wrapper}>
            {
                privatelinks.map((el, index) => (
                    <Link
                        to={el.href}
                        className={`${style.link} ${style.text}`}
                        onClick={() => dispatch(closeWindow())}
                        key={index}
                    >
                        {el.title}
                    </Link>
                ))
            }
        </div>
    )
}

export default PublicRoutes