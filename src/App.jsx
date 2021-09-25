import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';

const App = () => (
  <div className="layout">
    <Header />
    <div className="layout-view">Some activities should be here</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
