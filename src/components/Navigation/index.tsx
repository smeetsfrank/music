import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { AppDispatch, RootState } from '../../store/store';
import { searchAction } from '../../store/searchSlice';

import Albums from '../../pages/Albums';
import Artists from '../../pages/Artists';
import Playlists from '../../pages/Playlists';

import classes from './index.module.scss';

const Navigation: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const appState = useSelector((state: RootState) => state);

  const setFilter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { id } = e.currentTarget;
    dispatch(searchAction.applyFilter(id));
  };

  return (
    <>
      <nav className={classes.filter}>
        <ul>
          <NavLink
            to="/albums"
            onClick={setFilter}
            id="album"
            activeClassName={classes.active}
          >
            Albums
          </NavLink>
          <NavLink
            to="/artists"
            onClick={setFilter}
            id="artist"
            activeClassName={classes.active}
          >
            Artists
          </NavLink>
          <NavLink
            to="/playlists"
            onClick={setFilter}
            id="playlist"
            activeClassName={classes.active}
          >
            Playlists
          </NavLink>
        </ul>
      </nav>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/albums">
            <Albums albums={appState.album.albums} />
          </Route>
          <Route path="/artists">
            <Artists artists={appState.artist.artists} />
          </Route>
          <Route path="/playlists">
            <Playlists playlists={appState.playlist.playlists} />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Navigation;
