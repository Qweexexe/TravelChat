import style from './Routes.module.css'
import {Link} from "react-router-dom";
import {publiclinks} from './links'

const PublicRoutes = ({toggle}) => {
    return (
        <div className={style.wrapper}>
            {
                publiclinks.map((el, index) => (
                    <Link
                        to={el.href}
                        className={`${style.link} ${style.text}`}
                        onClick={toggle}
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