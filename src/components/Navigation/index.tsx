import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { searchAction } from '../../store/searchSlice';

import Albums from '../../pages/Albums';
import Artists from '../../pages/Artists';
import Playlists from '../../pages/Playlists';
import Personal from '../../pages/Personal';

const Navigation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const appState = useSelector((state: RootState) => state);

  const setFilter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { id } = e.currentTarget;
    dispatch(searchAction.applyFilter(id));
  };

  return (
    <Router>
      <nav>
        <ul>
          <Link to="/albums" onClick={setFilter} id="album">
            Albums
          </Link>
          <Link to="/artists" onClick={setFilter} id="artist">
            Artists
          </Link>
          <Link to="/playlists" onClick={setFilter} id="playlist">
            Playlists
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route path="/albums">
          <Albums albums={appState.album.albums} />
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
};

export default Navigation;
