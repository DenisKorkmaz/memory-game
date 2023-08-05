import { useState } from "react";
import Button from "../Button/Button";
import Link from 'next/link';

export default function StartGameScreen() {
  const [activeTheme, setActiveTheme] = useState(null);
  const [activePlayers, setActivePlayers] = useState(null);
  const [activeGridSize, setActiveGridSize] = useState(null);

  return (
    <>
      <h1>Memory</h1>
      <div className="startGameCard">
        <div>
          <p>Select Theme</p>
          <Button
            hoverable
            buttonName="Numbers"
            onClick={() => setActiveTheme("Numbers")}
            active={activeTheme === "Numbers"}
          />
          <Button
            hoverable
            buttonName="Icons"
            onClick={() => setActiveTheme("Icons")}
            active={activeTheme === "Icons"}
          />
        </div>
        <div>
          <p>Number of Players</p>
          <Button
            hoverable
            buttonName="1"
            onClick={() => setActivePlayers("1")}
            active={activePlayers === "1"}
          />
          <Button
            hoverable
            buttonName="2"
            onClick={() => setActivePlayers("2")}
            active={activePlayers === "2"}
          />
        </div>
        <div>
          <p>Grid Size</p>
          <Button
            hoverable
            buttonName="4x4"
            onClick={() => setActiveGridSize("4x4")}
            active={activeGridSize === "4x4"}
          />
          <Button
            hoverable
            buttonName="6x6"
            onClick={() => setActiveGridSize("6x6")}
            active={activeGridSize === "6x6"}
          />
        </div>
        <Link href="/gameboard">
          <Button buttonName="Start Game" className={"startButton"} />
        </Link>
      </div>
    </>
  );
}