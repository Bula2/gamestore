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
                    <NavLink to={"/"} title={"На главную"}>GameBoy</NavLink>
                </div>
            </div>
            <div className={cls.links}>
                    <NavLink to={"/shop"} title={"В магазин"}>Магазин</NavLink>
                    <NavLink to={"/instruction"} title={"К интсрукции"}>Инструкция к применению</NavLink>
                    <NavLink to={"/basket"} title={"В корзину"}>Корзина</NavLink>
                    <NavLink to={"/login"} title={"Войти"}>Вход</NavLink>
            </div>
        </header>
    )
}

export default Header;