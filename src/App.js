import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by{" "}
        <a href="/" target="/">
          Ashley Cruz
        </a>{" "}
        and is{" "}
        <a href="https://github.com/ashcruzzz/react-weather-app-update">
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
