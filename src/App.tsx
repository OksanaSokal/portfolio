import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Reviews } from './layout/section/reviews/Reviews';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Reviews/>
        </div>
    );
}

export default App;

