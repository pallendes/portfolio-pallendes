import React, {ReactElement} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {grommet, Grommet} from 'grommet';
import {deepMerge} from 'grommet/utils';
import GlobalStyle from './common/global-style';

import {Home} from './pages/home';

const App = (): ReactElement => {
  const customBreackpoints = deepMerge(grommet, {
    global: {
      small: {
        value: 767,
      },
      medium: {
        value: 1200,
      },
    },
  });

  return (
    <>
      <GlobalStyle />
      <Grommet theme={customBreackpoints}>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Grommet>
    </>
  );
};

export default App;
