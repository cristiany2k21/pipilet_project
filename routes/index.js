import React from 'react';
import { IndexRoute, Route } from 'react-router'
import AppContainer from '../components/containers/AppContainer';
import HomePage from '../components/containers/home-page/HomePage';
import SongPage from '../components/containers/Song-page/SongPage';
import ColorNumber from '../components/containers/color-number/ColorNumber';
import NumberSelection from '../components/containers/number-selection/NumberSelection';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomePage}/>
    <Route path="/home" component={HomePage} />
    <Route path="/song" component={SongPage} />
    <Route path="/colorNumber" component={ColorNumber} />
    <Route path="/numberSelection" component={NumberSelection} />
  </Route>

)