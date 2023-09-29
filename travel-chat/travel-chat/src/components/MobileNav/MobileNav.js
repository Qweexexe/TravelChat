import style from './MobieNav.module.css'
import PublicRoutes from "../Navigation/PublicRoutes";


const MobileNav = ({toggle}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.exit} onClick={toggle}>
                <div className={`${style.line_one} ${style.line}`}></div>
                <div className={`${style.line_two} ${style.line}`}></div>
            </div>
            <PublicRoutes toggle={toggle}/>
        </div>
    )
}

export default MobileNav