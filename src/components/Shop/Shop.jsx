import cls from "./Shop.module.scss"
import {connect} from "react-redux";
import Game from "./Game";
import Fuse from "fuse.js";
import {useState} from "react";


const Shop = ({gamesList}) => {

    const [games, setData] = useState(gamesList);


    const searchData = (pattern) => {
        if (!pattern) {
            setData(gamesList);
            return;
        }

        const fuse = new Fuse(games, {
            keys: ["title"],
        });

        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
            setData([]);
        } else {
            result.forEach(({item}) => {
                matches.push(item);
            });
            setData(matches);
        }
    };

    return (
        <div className={cls.shop}>
            <div className={cls.top}>
                <h2 className={cls.title}>Магазин</h2>
                <div className={cls.search}>
                    <label htmlFor="site-search">Найти:</label>
                    <input onChange={(e) => searchData(e.target.value)} type="text"
                           id="site-search" placeholder={"Поиск в магазине"}/>
                </div>
            </div>
            <div className={cls.games_list}>
                {games.map(game => {
                        return (
                            <Game title={game.title} platform={game.platform}
                                  price={game.price} photo={game.photo}/>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default connect(
    (state) => ({
        gamesList: state.shopPage.games
    })
)(Shop);