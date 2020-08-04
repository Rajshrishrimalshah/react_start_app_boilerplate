import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard, Preview } from './modules';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/preview" component={Preview} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
