import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          This project is created bye <em>Hedieh</em> and is{" "}
          <a
            href="https://github.com/Hedi-alz/weather-project-react"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced
          </a>
        </p>
      </div>
    </div>
  );
}
