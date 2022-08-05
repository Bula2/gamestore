import cls from "./Shop.module.scss"
import {NavLink} from "react-router-dom";



const Game = ({title, platform, price, photo}) => {
    return (
        <div className={cls.game}>
            <div className={cls.photo}>
                <img src={photo} alt="Тут фотка игры" title={title}/>
            </div>
            <div className={cls.info}>
                <NavLink to={"/shop"} title={title}>{title}</NavLink>
            </div>
            <div className={cls.platform}>
                <span>{platform}</span>
            </div>
            <div className={cls.price}>
                <span>{price} &#8381;</span>
            </div>
            <div className={cls.button}>
                <NavLink to={"/basket"}>
                    <button title={"Купить"}>
                        Купить
                    </button>
                </NavLink>

            </div>

        </div>
    )
}

export default Game