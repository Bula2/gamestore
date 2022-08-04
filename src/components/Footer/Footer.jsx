import cls from "./Footer.module.scss"
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <div className={cls.footer}>
            <div>
                <span>Связаться с нами:</span>
                <FontAwesomeIcon icon="fa-brands fa-telegram" />
            </div>
        </div>
    )
}

export default Footer;