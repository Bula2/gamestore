import cls from "./Basket.module.scss"

const BasketBuyMenu = ({basketItems}) => {
    debugger
    return (
        <div className={cls.buy_menu}>
            <div className={cls.buy_menu_info}>
                <ul>
                    {basketItems.map(item => {
                        return(
                            <li>{item.title}</li>
                        )
                    })}
                </ul>
            </div>
            <div>

            </div>
        </div>

    )
}

export default BasketBuyMenu;