import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext";
import PrincipalPage from './pages/PrincipalPage';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';

const CenterAlign = styled.div`
  text-align: center;
  background: rgba( 232, 241, 242, 0.4);
  padding: 8%;
  padding-top: 2%;
`;

function App() {
  return (
    <div>
      <Router>
        <LoginProvider>
          <Switch>

            <CenterAlign>
              <PrivateRoute exact path="/" component={PrincipalPage} />
              <Route path="/login" component={Login} />
            </CenterAlign>
          </Switch>

        </LoginProvider>


      </Router>
    </div>


  );
}

export default App;
