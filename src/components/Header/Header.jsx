import cls from "./Header.module.scss"
import logoImg from "./../../assets/img/rubik.png"
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className={cls.logo}>
                <div className={cls.logo_img}>
                    <img src={logoImg} alt=""/>
                </div>
                <div className={cls.logo_span}>
                    <NavLink to={""}>GameBoy</NavLink>
                </div>
            </div>
            <div className={cls.links}>
                    <NavLink to={""}>Магазин</NavLink>
                    <NavLink to={""}>Условия покупки</NavLink>
                    <NavLink to={""}>Инструкция к применению</NavLink>
                    <NavLink to={""}>Вход</NavLink>
            </div>
        </header>
    )
}

export default Header;