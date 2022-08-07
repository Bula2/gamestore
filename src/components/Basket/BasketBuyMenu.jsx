import cls from "./Basket.module.scss"

const BasketBuyMenu = ({basketItems}) => {
    debugger
    return (
        <div className={cls.buy_menu}>
            <div className={cls.header_buy_menu}>
                <div>
                    <span>Список игр</span>
                </div>
                <div className={cls.buy_menu_info}>
                    <ul>
                        {basketItems.map(item => {
                            return (
                                <li>{item.title}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={cls.buy_menu_button}>
                <button>Купить</button>
            </div>
            <div>

            </div>
        </div>

    )
}

export default BasketBuyMenu;