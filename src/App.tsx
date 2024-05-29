import './App.css';
import { Header } from './layout/header/Header';
import { About } from './layout/section/about/About';
import { Contacts } from './layout/section/contacts/Contacts';
import { Main } from './layout/section/main/Main';
import { Reviews } from './layout/section/reviews/Reviews';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About/>
            <Skills />
            <Works />
            <Reviews />
            <Contacts/>
        </div>
    );
}

export default App;

