import Particles from "react-tsparticles";
import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { About } from "./layout/section/about/About";
import { AchievementsLine } from "./layout/section/achievements-line/AchievementsLine";
import { Contacts } from "./layout/section/contacts/Contacts";
import { Main } from "./layout/section/main/Main";
import { MyWorks } from "./layout/section/myWorks/MyWorks";
import { Reviews } from "./layout/section/reviews/Reviews";
import { Skills } from "./layout/section/skills/Skills";
import { Works } from "./layout/section/works/Works";
import { Particle } from "./components/particle/Particle";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <About />
      <Skills />
      <AchievementsLine />
      <Works />
      <Reviews />
      <MyWorks />
      <Contacts />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;
