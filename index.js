import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import routes from './routes/index'
import { AppContainer } from 'react-hot-loader';
import './style/index.scss';

const store = createStore(reducers);

render(
  <AppContainer>
    <Provider store={store}>
      <Router routes={routes} history={browserHistory}/>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <Router routes={routes} history={browserHistory}/>
        </Provider>
      </AppContainer>,
      document.getElementById('app'))
  })
}