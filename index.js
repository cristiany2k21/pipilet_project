import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import routes from './src/routes'
import { AppContainer } from 'react-hot-loader';
import './src/style/index.scss';

const store = createStore(reducers);

render(
  <AppContainer>
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} routes={routes} history={browserHistory}/>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./src/routes', () => {
    const nextRoute = require('./src/routes');
    render(
      <AppContainer>
        <Provider store={store}>
          <Router onUpdate={() => window.scrollTo(0, 0)} routes={nextRoute} history={browserHistory}/>
        </Provider>
      </AppContainer>,
      document.getElementById('app'))
  })
}