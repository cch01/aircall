import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Activity from './components/Activity.jsx';
import Section from './components/Section.jsx';
import InboxList from './components/InboxList.jsx';
import ArchiveList from './components/ArchiveList.jsx';

const demo = [
  {
    id: 78334,
    created_at: '2018-04-19T09:38:41.000Z',
    direction: 'outbound',
    from: 'Pierre-Baptiste Béchu',
    to: '06 46 62 12 33',
    via: 'NYC Office',
    duration: '120',
    is_archived: false,
    call_type: 'missed',
  },
  {
    id: 78533,
    created_at: '2018-04-18T16:59:48.000Z',
    direction: 'outbound',
    from: 'Jonathan Anguelov',
    to: '06 45 13 53 91',
    via: 'NYC Office',
    duration: '60',
    is_archived: true,
    call_type: 'missed',
  },
  {
    id: 7832,
    created_at: '2018-04-18T16:53:22.000Z',
    direction: 'inbound',
    from: '06 19 18 23 92',
    to: 'Jonathan Anguelov',
    via: 'Support FR',
    duration: '180',
    is_archived: false,
    call_type: 'answered',
  },
  {
    id: 78331,
    created_at: '2018-04-18T16:42:55.000Z',
    direction: 'inbound',
    from: '06 34 45 74 34',
    to: 'Xavier Durand',
    via: 'Support FR',
    duration: '180',
    is_archived: false,
    call_type: 'answered',
  },
  {
    id: 78230,
    created_at: '2018-04-18T16:23:43.000Z',
    direction: 'inbound',
    from: '+33 6 34 45 74 34',
    to: null,
    via: 'Support FR',
    duration: '120',
    is_archived: false,
    call_type: 'voicemail',
  },
  {
    id: 78129,
    created_at: '2018-04-18T15:43:32.000Z',
    direction: 'inbound',
    from: '+33 6 34 45 74 34',
    to: 'Olivier Pailhes',
    via: 'Spain Hotline',
    duration: '300',
    is_archived: false,
    call_type: 'answered',
  },
  {
    id: 78354,
    created_at: '2018-04-19T09:38:41.000Z',
    direction: 'outbound',
    from: 'Pierre-Baptiste Béchu',
    to: '06 46 62 12 33',
    via: 'NYC Office',
    duration: '120',
    is_archived: false,
    call_type: 'missed',
  },
  {
    id: 78433,
    created_at: '2018-04-18T16:59:48.000Z',
    direction: 'outbound',
    from: 'Jonathan Anguelov',
    to: '06 45 13 53 91',
    via: 'NYC Office',
    duration: '60',
    is_archived: true,
    call_type: 'missed',
  },
  {
    id: 78232,
    created_at: '2018-04-18T16:53:22.000Z',
    direction: 'inbound',
    from: '06 19 18 23 92',
    to: 'Jonathan Anguelov',
    via: 'Support FR',
    duration: '180',
    is_archived: false,
    call_type: 'answered',
  },
  {
    id: 78311,
    created_at: '2018-04-18T16:42:55.000Z',
    direction: 'inbound',
    from: '06 34 45 74 34',
    to: 'Xavier Durand',
    via: 'Support FR',
    duration: '180',
    is_archived: false,
    call_type: 'answered',
  },
  {
    id: 78330,
    created_at: '2018-04-18T16:23:43.000Z',
    direction: 'inbound',
    from: '+33 6 34 45 74 34',
    to: null,
    via: 'Support FR',
    duration: '120',
    is_archived: false,
    call_type: 'voicemail',
  },
  {
    id: 78229,
    created_at: '2018-04-18T15:43:32.000Z',
    direction: 'inbound',
    from: '+33 6 34 45 74 34',
    to: 'Olivier Pailhes',
    via: 'Spain Hotline',
    duration: '300',
    is_archived: false,
    call_type: 'answered',
  },
];
const App = () => (
  <div className="layout">
    <Header currentTab="inbox" />
    <div className="h-full">
      <ArchiveList activities={demo} />
      {/* <InboxList activities={demo} /> */}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
