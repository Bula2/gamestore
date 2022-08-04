import cls from './App.module.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.content}>
                <Header/>
                <Main/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
