import './App.css';
import styled from 'styled-components';

import { LoginProvider } from "./contexts/LoginContext";
import PrincipalPage from './pages/PrincipalPage';

const CenterAlign = styled.div`
  text-align: center;
  background: rgba( 232, 241, 242, 0.4);
  padding: 8%;
  padding-top: 2%;
`;

function App() {  
  return (
    <LoginProvider>
      <CenterAlign>
       <PrincipalPage />
      </CenterAlign>
    </LoginProvider>

  );
}

export default App;
