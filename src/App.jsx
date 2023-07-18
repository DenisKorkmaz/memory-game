// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartGameScreen from "./components/StartGameScreen/StartGameScreen";
import GameBoard from './components/GameBoard/GameBoard';
import "../src/App.css";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<StartGameScreen />} />
          <Route path="/GameBoard" element={<GameBoard />} />
        </Routes>
      </Router>
    </div>
  )
}
