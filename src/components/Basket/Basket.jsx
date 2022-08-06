import cls from "./Basket.module.scss"
import {connect} from "react-redux";
import {useState} from "react";
import BasketItem from "./BasketItem";
import BasketBuyMenu from "./BasketBuyMenu";

const Basket = ({items}) => {

    let [basketItems] = useState([]);

    items.forEach((item) => {
        basketItems.push({
            "id": item.id, "title": item.title,
            "platform": item.platform, "price": item.price, "photo": item.photo
        });
    });

    return (
        <div className={cls.basket}>
            <h2 className={cls.logo}>Корзина</h2>
            <div className={cls.list_menu}>
                <div className={cls.basket_list}>
                    {basketItems.map(item => {
                        return <BasketItem id={item.id} title={item.title} platform={item.platform} price={item.price}
                                           photo={item.photo}/>
                    })
                    }
                </div>
                <div>
                    <BasketBuyMenu basketItems={basketItems}/>
                </div>
            </div>
        </div>

    )
}

export default connect((state) => ({
    items: state.basketPage.items
}))(Basket);