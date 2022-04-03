import { Route, Switch } from "react-router-dom";

import './App.css';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Live from './pages/Live';
import Guide from './pages/Guide';
import Replay from './pages/Replay';
import Collection from './pages/Collection';

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/live">
            <Live />
          </Route>
          <Route path="/guide">
            <Guide />
          </Route>
          <Route path="/replay">
            <Replay />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>

        </Switch>
      </Layout>
  );
}

export default App;
