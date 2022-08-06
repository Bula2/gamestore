import cls from "./Shop.module.scss"
import {NavLink} from "react-router-dom";


const Game = ({title, platform, price, photo, addItemToBasket, id}) => {

    const addItem = () => {
        addItemToBasket(title, platform, price, photo, id);
    }

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
                <button onClick={addItem} title={"Купить"}>
                    Добавить в корзину
                </button>
            </div>

        </div>
    )
}

export default Game