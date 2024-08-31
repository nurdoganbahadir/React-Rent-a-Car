import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";
import { MdModeNight } from "react-icons/md";
import { FaSun } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Tema değişikliği olduğunda bu değişikliği kaydet ve body'ye uygula.
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Temayı değiştiren fonksiyon
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} className="dark-light">
        {theme === "light" ? <MdModeNight /> : <FaSun />}
      </button>
      <HomePage />
    </div>
  );
}

export default App;
