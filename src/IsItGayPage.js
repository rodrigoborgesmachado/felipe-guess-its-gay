import { useState } from "react";

export default function IsItGayPage() {
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");

  const responses = [
    "Com certeza é gay, segundo o Felipe!",
    "Isso é coisa de hétero mesmo, relaxa.",
    "Felipe disse que é meio suspeito...",
    "Isso aí é 100% gay, confirmado!",
    "Nada a ver, tá de boa."
  ];

  const checkAction = () => {
    if (action.trim() === "") {
      setResult("Digite uma ação primeiro!");
    } else {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setResult(randomResponse);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Descubra se é gay segundo o Felipe</h1>
        <input
          value={action}
          onChange={(e) => setAction(e.target.value)}
          placeholder="Digite uma ação..."
          className="input"
        />
        <button onClick={checkAction} className="button">
          Verificar
        </button>
        {result && <p className="result">{result}</p>}
      </div>
    </div>
  );
}