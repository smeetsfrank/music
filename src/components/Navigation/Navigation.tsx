import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Albums from '../../pages/Albums';
import Artists from '../../pages/Artists';
import Playlists from '../../pages/Playlists';
import Personal from '../../pages/Personal';

const Navigation: React.FC = () => (
  <Router>
    <nav>
      <ul>
        <Link to="/albums">Albums</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/playlists">Playlists</Link>
        <Link to="/personal">Personal</Link>
        <li>3</li>
      </ul>
    </nav>
    <Switch>
      <Route path="/albums">
        <Albums />
      </Route>
      <Route path="/artists">
        <Artists />
      </Route>
      <Route path="/playlists">
        <Playlists />
      </Route>
      <Route path="/personal">
        <Personal />
      </Route>
    </Switch>
  </Router>
);

export default Navigation;
