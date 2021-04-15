import logo from './logo.svg';
import './App.css';
import Toggle from './Components/Toggle';
import Text from './Components/Text';
import { Maths } from './Components/Maths';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

ahoj
        <a
          className="App-link"
          href="upjs.sk"
          target="_blank"
          rel="noopener noreferrer"
        >
          upjs
        </a>
      </header>
      <Maths />
      <Toggle />
      <Text />
    </div>
  );
}

export default App;
