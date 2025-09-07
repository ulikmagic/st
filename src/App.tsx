import { useState } from "react";
import coffee from "./assets/coffee.svg";
import coffeeBig from "./assets/coffee-big.svg";

import "./styles/letter.css";
import clsx from "clsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="main">
      <div className="envelope-wrapper">
        <div id="envelope" className={clsx(isOpen ? "open" : "close")}>
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            Привет Айганым! Хочу пригласить тебя на чашку кофе. Буду рад, если
            согласишься. <br /> Мой телеграм:{" "}
            <span className="telegram">@ulikmagic</span>
          </div>
          <div className="hearts">
            <div className="coffee">
              <img src={coffee} alt="coff" />
            </div>
            <div className="coffee-big">
              <img src={coffeeBig} alt="title" />
            </div>
          </div>
        </div>
      </div>
      <div className="reset">
        <button id="open" onClick={() => setIsOpen(true)}>
          Открыть
        </button>
        <button id="reset" onClick={() => setIsOpen(false)}>
          Закрыть
        </button>
      </div>
    </main>
  );
}

export default App;
