import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import HouseCard from './components/HouseCard';
import Header from './components/Header';

const CenterAlign = styled.div`
  text-align: center;
  background: rgba( 232, 241, 242, 0.4);
  padding: 8%;
`;

const Body = styled.body`
  text-align: center;
`;

function App() {
  const [indexHover, setIndexHover] = useState(0);

  return (
    <CenterAlign>

      <header className="App-header">
        <Header url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" setIndexHover={setIndexHover} indexHover={indexHover} buttons={['Contatenos', 'Sobre', 'Casas']} onPressRadiusButton={() => null} />
      </header>
      <Body>
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
      </Body>
    </CenterAlign>
  );
}

export default App;
