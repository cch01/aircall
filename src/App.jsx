import React, { useEffect } from 'react';
import {
  Switch, Route, Redirect, useLocation, useHistory,
} from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

import { observer } from 'mobx-react';
import useStores from './lib/hooks/useStores';
import Header from './components/Header.jsx';
import InboxList from './components/InboxList.jsx';
import ArchiveList from './components/ArchiveList.jsx';

const App = observer(() => {
  const location = useLocation();
  const history = useHistory();
  const { uiStore, activityStore } = useStores();
  const { archives, inBox } = activityStore;
  const { enterAnimation, exitAnimation } = uiStore;

  useEffect(() => uiStore.refreshParams(() => history.replace(location.pathname)),
    [location.pathname, uiStore.refreshParams, history]);
  return (
    <div className="layout">
      <Header currentPath={location.pathname ?? '/inbox'} />
      <div className="h-full">
        <PageTransition
          enterAnimation={enterAnimation}
          exitAnimation={exitAnimation}
          transitionKey={location.pathname}
        >
          <Switch location={location}>
            <Route exact path="/inbox" render={() => <InboxList activities={inBox} />} />
            <Route exact path="/archives" render={() => <ArchiveList activities={archives} />} />
            <Route path="*" render={() => <Redirect to="/inbox" />} />
          </Switch>
        </PageTransition>
      </div>
    </div>
  );
});

export default App;
