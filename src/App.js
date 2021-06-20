import style from './App.module.css';
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
