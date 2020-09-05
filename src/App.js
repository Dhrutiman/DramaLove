import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DetailPage from './DetailPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={DetailPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
