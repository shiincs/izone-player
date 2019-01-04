import React, { Component } from 'react';
import LayoutView from './components/LayoutView/LayoutView';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListView from './components/ListView/ListView';

class App extends Component {
  render() {
    return (
      <Router>
        <LayoutView>
          <Route to='/' component={ListView} />
        </LayoutView>
      </Router>
    );
  }
}

export default App;
