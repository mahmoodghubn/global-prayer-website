import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We don't collect any of your data. Any permission we ask for is needed
          for the services provided by this app.
        </p>
      </header>
    </div>
  );
}

export default App;
