import React, { useState, useEffect } from "react";
import "./App.css";

// Import des images
import amanatto from './assets/images/amanatto.png';
import yokan from './assets/images/choco.png';
import daifuku from './assets/images/daifuku.png';
import dango from './assets/images/dango.png';
import dorayaki from './assets/images/dorayaki.png';
import mochi from './assets/images/mochi.png';
import monaka from './assets/images/patisseriefleur.png';
import konpeito from './assets/images/konpeito.png';
import tayaki from './assets/images/tayiaki.png';
import requestGif from './assets/images/request.gif';
import happyGif from './assets/images/happy.gif';
import angryGif from './assets/images/angry.gif';

// Stock initial
const initialStock = {
  1: 1, 2: 5, 3: 2, 4: 7, 5: 3, 6: 2, 7: 4, 8: 3, 9: 2
};

const patisseries = [
  { id: 1, name: "Amanatto", img: amanatto },
  { id: 2, name: "Yokan", img: yokan },
  { id: 3, name: "Daifuku", img: daifuku },
  { id: 4, name: "Dango", img: dango },
  { id: 5, name: "Dorayaki", img: dorayaki },
  { id: 6, name: "Mochi", img: mochi },
  { id: 7, name: "Monaka", img: monaka },
  { id: 8, name: "Konpeito", img: konpeito },
  { id: 9, name: "Tayaki", img: tayaki }
];

// Filtre les pâtisseries disponibles
const getAvailable = stock => patisseries.filter(p => stock[p.id] > 0);

export default function App() {
  const [selection, setSelection] = useState("");
  const [stock, setStock] = useState(initialStock);
  const [nezukoRequest, setNezukoRequest] = useState(null);
  const [nezukoBubble, setNezukoBubble] = useState("");
  const [nezukoImg, setNezukoImg] = useState("");
  const [timer, setTimer] = useState(10);
  const [showBonk, setShowBonk] = useState(null);

  // Lancer un nouveau timer à chaque demande Nezuko
  useEffect(() => {
    if (!nezukoRequest) return;
    setTimer(10);
    const interval = setInterval(() => {
      setTimer(t => {
        if (t === 1) {
          setNezukoImg(angryGif);
          setTimeout(() => {
            triggerNezukoRequest();
            setSelection("");
            setShowBonk(null);
          }, 2000);
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [nezukoRequest]);

  // Demande Nezuko (random)
  function triggerNezukoRequest() {
    const available = getAvailable(stock);
    if (!available.length) {
      setNezukoBubble("Toutes les pâtisseries sont épuisées !");
      setNezukoImg("");
      setNezukoRequest(null);
    } else {
      const pick = available[Math.floor(Math.random() * available.length)];
      setNezukoBubble(`Je veux un ${pick.name} !`);
      setNezukoRequest(pick.id.toString());
      setNezukoImg(requestGif);
    }
  }

  useEffect(() => {
    triggerNezukoRequest();
    // eslint-disable-next-line
  }, []);

  // Gestion clavier
  function handleSelect(n) {
    setSelection(sel => (sel + n).slice(0, 2));
  }
  function handleReset() {
    setSelection("");
  }
  function handleValidate() {
    if (stock[selection] > 0) {
      setShowBonk(
        patisseries.find(p => p.id.toString() === selection).img
      );
      setStock(prev => ({
        ...prev,
        [selection]: prev[selection] - 1
      }));
    } else {
      setSelection("NO STOCK");
      return;
    }
    // Vérification Nezuko
    if (selection === nezukoRequest) {
      setNezukoImg(happyGif);
    } else {
      setNezukoImg(angryGif);
    }
    setTimeout(() => {
      triggerNezukoRequest();
      setShowBonk(null);
      setSelection("");
    }, 2000);
  }

  return (
    <div className="container">
      <h1>Connais-tu les desserts japonais?</h1>
      <div className="distributeur">
        <div className="haut">
          <div className="patisserie">
            {patisseries.map(p => (
              <div className="item" key={p.id}>
                <img src={p.img} alt={p.name} />
                <div className="qtt">{stock[p.id]}</div>
                <div className="number">{p.id}</div>
              </div>
            ))}
          </div>
          <div className="commande">
            <div className="screen">
              <p>Faites votre sélection :</p>
              <p>{selection}</p>
              <p>Temps restant : {timer}s</p>
            </div>
            <div className="buttons">
              {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(n => (
                <button key={n} onClick={() => handleSelect(n)}>{n}</button>
              ))}
              <button onClick={handleReset}>🔄</button>
              <button onClick={handleValidate}>✅</button>
            </div>
          </div>
        </div>
        <div className="bas">
          <div className="bonk">
            {showBonk && <img src={showBonk} alt="Bonk" />}
          </div>
          <div className="nezuko">
            {nezukoImg && <img src={nezukoImg} alt="Nezuko" />}
            <div className="nezuko-bubble">{nezukoBubble}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
