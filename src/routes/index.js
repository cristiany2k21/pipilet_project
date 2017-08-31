import React from 'react';
import { IndexRoute, Route } from 'react-router'
import AppContainer from '../scenes/app-container';
import HomeContainer from '../scenes/home-page';
import SongPage from '../scenes/song-page';
import LyricsPage from '../scenes/lyrics-page/';
import ColorNumberPage from '../scenes/color-number-page';
import TranslatedNumberPage from '../scenes/translated-number-page/';
import NumberPage from '../scenes/number-page';
import ColorPage from '../scenes/color-page';
import TranslatedColor from '../scenes/translated-color-page/';
import CookerPage from '../scenes/cook-page';
import ChooseCountryCook from '../scenes/choose-country-cook';
import DisplayRecipe from '../scenes/display-recipe';
import PresentationPage from '../scenes/presentation-page';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer}/>
    <Route path="/home" component={HomeContainer}/>
    <Route path="/song" component={SongPage}/>
    <Route path="/song/:language" component={LyricsPage}/>
    <Route path="/colorNumber" component={ColorNumberPage}/>
    <Route path="/number" component={NumberPage}/>
    <Route path="/number/:language" component={TranslatedNumberPage}/>
    <Route path="/color" component={ColorPage}/>
    <Route path="/color/:language" component={TranslatedColor}/>
    <Route path="/cooker" component={CookerPage}/>
    <Route path="/cooker/:continent" component={ChooseCountryCook}/>
    <Route path="/cooker/:continent/:id" component={DisplayRecipe}/>
    <Route path="/presentation" component={PresentationPage}/>
  </Route>
)