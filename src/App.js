import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
         Hello World!!!
        </p> */}
        <p>
          Hi everyone and company! 
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn goole
        </a>
      </header>
    </div>
  );
}

export default App;
