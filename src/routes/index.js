import React from 'react';
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import AppContainer from '../scenes/app-container/app-container';
import HomeContainer from '../scenes/home-page/home-page';
import SongPage from '../scenes/song-page/song-page';
import LyricsPage from '../scenes/lyrics-page/';
import ColorNumberPage from '../scenes/color-number-page/color-number-page';
import TranslatedNumberPage from '../scenes/translated-number-page/';
import NumberPage from '../scenes/number-page/number-page';
import ColorPage from '../scenes/color-page/color-page';
import TranslatedColor from '../scenes/translated-color-page/';
import CookerPage from '../scenes/cook-page/cook-page';
import ChooseCountryCook from '../scenes/choose-country-cook/choose-country-cook';
import DisplayRecipe from '../scenes/display-recipe/display-recipe';
import PresentationPage from '../scenes/presentation-page/presentation-page';
import WhoAreWe from '../scenes/who-are-we/who-we-are';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer} />
    <Route path="/home" component={HomeContainer} />
    <Route path="/song" component={SongPage} />
    <Route path="/song/:language" component={LyricsPage} />
    <Route path="/colorNumber" component={ColorNumberPage} />
    <Route path="/number" component={NumberPage} />
    <Route path="/number/:language" component={TranslatedNumberPage} />
    <Route path="/color" component={ColorPage} />
    <Route path="/color/:language" component={TranslatedColor} />
    <Route path="/cooker" component={CookerPage} />
    <Route path="/cooker/:continent" component={ChooseCountryCook} />
    <Route path="/cooker/:continent/:id" component={DisplayRecipe} />
    <Route path="/presentation" component={PresentationPage} />
    <Route path="/whoarewe" component={WhoAreWe} />
  </Route>
)