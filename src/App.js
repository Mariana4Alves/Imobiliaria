import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Butom from '../src/components/butom';

const CenterAlign = styled.div`
  text-align: center;
`;

function App() {
  return (
    <CenterAlign>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Butom/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           React
        </a>
      </header>
    </CenterAlign>
  );
}

export default App;
