import React, {ReactElement} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {grommet, Grommet} from 'grommet';
import GlobalStyle from './common/global-style';

import {Home} from './pages/home';

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Grommet theme={grommet}>
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
