import * as React from 'react';
import Header from './Header';
import Heatmap from './Heatmap';

import './App.less';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <Heatmap className="App-content" />
      </div>
    );
  }
}

export default App;
