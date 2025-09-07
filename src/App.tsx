import { useState } from "react";

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
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
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
