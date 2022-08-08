import cls from "./Main.module.scss"
import {NavLink} from "react-router-dom";


const Main = () => {
    return (
        <div className={cls.main}>
            <div className={cls.info_about_us}>
                <div className={cls.about_us}>
                    <h2>О нас</h2>
                    <p>Привет, мы команда <span className={cls.gameboy}>GameBoy</span>.
                    Мы предоставляем возможность приобрести игры для Play Station в кратчайший срок
                    без затруднений и усилий. Ваша игра - наша забота</p>
                </div>
                <div className={cls.why_we}>
                    <h2>Почему мы</h2>
                    <p>Мы классные, умелый, современный, необъемлемые.
                        Шли отдельно, без системы, прямо к цели, мы бесцененны.
                        Цепь танцует вальс на теле, твоя подруга на прицеле
                        <span className={cls.gameboy}> GameBoy</span> возьмет Grammy,
                        черт возьми, мы будем первымы.
                        Молодые скейт-ублюдоки, мы сжигаем те купюры.
                        И катаемся здесь в туре, так что вытри свои слюни.
                        Выкупай как мы их кроем, даже стрельнув холостую.
                        <span className={cls.gameboy}> GameBoy</span> здесь кастует.
                        Мы не прем, мы.....</p>
                </div>
            </div>
            <div className={cls.button_to_shop}>
                <NavLink to={"/shop"}>
                    <button title={"В магазин"}>В магазин</button>
                </NavLink>

            </div>
        </div>
    )
}

export default Main;