import style from './MobieNav.module.css'
import PublicRoutes from "../Navigation/PublicRoutes";
import {useDispatch} from "react-redux";
import {toggleWindow} from "../redux/actions/actions";

const MobileNav = () => {
    const dispatch = useDispatch()
    return (
        <div className={style.wrapper}>
            <div className={style.exit} onClick={() => dispatch(toggleWindow())}>
                <div className={`${style.line_one} ${style.line}`}></div>
                <div className={`${style.line_two} ${style.line}`}></div>
            </div>
            <PublicRoutes/>
        </div>
    )
}

export default MobileNav