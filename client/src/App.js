import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from './routes';
import { useAuth } from './hooks/auth.hook';
import 'materialize-css';
import { AuthContext } from './context/AuthContext';


function App() {
  const {token, login, logout, userId} = useAuth();
  const isAutheticated = !!token;
  const routes = useRoutes(isAutheticated);
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAutheticated
    }}>
      <Router>
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
