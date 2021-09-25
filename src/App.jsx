import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Activity from './components/Activity.jsx';

const demo = {
  id: 7829,
  created_at: '2018-04-18T15:43:32.000Z',
  direction: 'outbound',
  from: '+33 6 34 45 74 34',
  to: 'Olivier Pailhes',
  via: 'Spain Hotline',
  duration: '300',
  is_archived: false,
  call_type: 'answered',
};
const App = () => (
  <div className="layout">
    <Header currentTab="inbox" />
    <div className="layout-view">
      <Activity activityData={demo} onChangeArchiveState={(id) => null} />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
