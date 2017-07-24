import React from 'react';
import { IndexRoute, Route } from 'react-router'
import AppContainer from '../scenes/app-container';
import HomeContainer from '../scenes/home-page';
import SongPage from '../scenes/song-page';
import LyricsPage from '../scenes/lyrics-page/';
import ColorNumberPage from '../scenes/color-number-page';
import NumberPage from '../scenes/number-page/';
import TranslatedNumberPage from '../scenes/translated-number-page/';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer}/>
    <Route path="/home" component={HomeContainer}/>
    <Route path="/song" component={SongPage}/>
    <Route path="/song/:id" component={LyricsPage}/>
    <Route path="/colorNumber" component={ColorNumberPage}/>
    <Route path="/number" component={NumberPage}/>
    <Route path="/number/:language" component={TranslatedNumberPage}/>
  </Route>
)