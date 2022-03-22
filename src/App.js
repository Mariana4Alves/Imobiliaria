import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Butom from '../src/components/butom';
import HouseCard from './components/HouseCard';

const CenterAlign = styled.div`
  text-align: center;
  background: #f1f1f1;
`;

function App() {
  return (
    <CenterAlign>
      <HouseCard priceText={'10.0000'}
        title={'Residence'}
        subtitle={'Kansas, UF'}
        bedQuantity={'4'}
        bathQuantity={'2'}
        size={'123'}
        href={'https://www.teclasap.com.br/wp-content/uploads/2009/09/house-1.jpg'} />
         <HouseCard priceText={'10.0000'}
        title={'Residence'}
        subtitle={'Kansas, UF'}
        bedQuantity={'4'}
        bathQuantity={'2'}
        size={'123'}
        href={'https://www.teclasap.com.br/wp-content/uploads/2009/09/house-1.jpg'} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Butom />
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
