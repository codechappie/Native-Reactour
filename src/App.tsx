import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/browse/machupicchu" exact component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
