import style from './App.module.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import ContentBlock from "./ContentBlock/ContentBlock";

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <ContentBlock/>
        </div>
    );
}

export default App;
