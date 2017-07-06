import React from 'react';
import { IndexRoute, Route } from 'react-router'
import AppContainer from '../components/containers/AppContainer';
import HomePage from '../components/containers/home-page/HomePage';
import SongPage from '../components/containers/Song-page/SongPage';
import ColorNumber from '../components/containers/color-number/ColorNumber';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomePage}/>
    <Route path="/home" component={HomePage} />
    <Route path="/song" component={SongPage} />
    <Route path="/colornumber" component={ColorNumber} />
  </Route>

)