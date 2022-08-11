import cls from "./Basket.module.scss"
import {useState} from "react";

const BasketBuyMenu = ({basketItems}) => {

    let [sum] = useState(0)

    basketItems.forEach(item => {
        sum += item.price
    })

    return (
        <>
            <div className={cls.buy_menu}>
                <div className={cls.header_buy_menu}>
                    <div>
                        <span>Список игр</span>
                    </div>
                    <div className={cls.buy_menu_info}>
                        {basketItems.length > 0 ?
                            <ul>
                                {basketItems.map(item => {
                                    return (
                                        <li key={item.id}>{item.title}</li>
                                    )
                                })}
                            </ul>
                            : <span>Тут пока пустовато :(</span>
                        }

                    </div>
                </div>
                <div className={cls.buy_menu_sum}>
                    <span>Итого: {sum} &#8381;</span>
                </div>
                <div className={cls.buy_menu_button}>
                    <button>Перейти к оформлению</button>
                </div>
            </div>
            <div className={cls.buy_menu_mobile}>
                <div className={cls.buy_menu_sum_mobile}>
                    <span>Итого: {sum} &#8381;</span>
                </div>
                <div className={cls.buy_menu_button_mobile}>
                    <button>Перейти к оформлению</button>
                </div>
            </div>
        </>

    )
}

export default BasketBuyMenu;