import * as React from 'react';
import Header from './Header';

import './App.less';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit sdsd<code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
