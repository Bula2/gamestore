import cls from "./Basket.module.scss"

const BasketItem = ({id, title, platform, price, photo}) => {
    debugger
    return (
        <div className={cls.basket_item}>
            <div className={cls.photo}>
                <img src={photo} alt=""/>
            </div>
            <div className={cls.info}>
                <div>
                    <span>{title}</span>
                    <span>{platform}</span>
                    <span>{price}&#8381;</span>
                </div>
                <div>
                    <button>Удалить</button>
                </div>
            </div>

        </div>

    )
}

export default BasketItem;