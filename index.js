import './start-service-worker';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import routes from './src/routes';
import { AppContainer } from 'react-hot-loader';
import logger from 'redux-logger';
import './src/style/index.sass';

const store = createStore(
reducers,
applyMiddleware(logger)
);

render(
<AppContainer>
	<Provider store={store}>
		<Router onUpdate={() => window.scrollTo(0, 0)} routes={routes}
		        history={browserHistory} key={Math.random()}/>
	</Provider>
</AppContainer>,
document.getElementById('app')
);

if (module.hot) {
	module.hot.accept('./src/routes', () => {
		render(
		<AppContainer>
			<Provider store={store}>
				<Router onUpdate={() => window.scrollTo(0, 0)} routes={routes}
				        history={browserHistory} key={Math.random()}/>
			</Provider>
		</AppContainer>,
		document.getElementById('app'));
	});
}
;
