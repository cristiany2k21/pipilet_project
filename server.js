import React from 'react';
import express from 'express';
import Webpack from 'webpack';
import webpackConfig from './webpack-dev-client.config';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { match, RouterContext } from 'react-router';
import routes from './src/routes/index';
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const compiler = Webpack(webpackConfig);
const app = express();

const store = createStore(
reducers,
applyMiddleware(logger)
);
let style = '';

console.log('process.env.NODE_ENV ------> ', process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true
	}));

	app.use(require('webpack-hot-middleware')(compiler));
}
else {
	style = '<link rel="stylesheet" type="text/css" href="/styles.min.css">';
}

app.use(express.static('public'));

app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	next();
});

app.get('*', (req, res) => {
	match({routes: routes, location: req.url}, (err, redirect, props) => {
		if (err) {
			res.status(500).send(err.message);
		}
		else if (redirect) {
			res.redirect(redirect.pathname + redirect.search);
		}
		else if (props) {
			const appHtml = renderToString(
			<Provider store={store}>
				<RouterContext {...props}/>
			</Provider>
			);
			res.send(renderPage(appHtml));
		}
		else {
			res.status(404).send('Not Found');
		}
	});
});
{/*<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300" rel="stylesheet">*/
}
{/*<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Quattrocento+Sans|Work+Sans:100,200,300" rel="stylesheet">*/
}
{/*<link href="https://fonts.googleapis.com/css?family=Montserrat:800" rel="stylesheet">*/
}

function renderPage(appHtml) {
	return `
    <!doctype html public="storage">
    <html>
      <head>
        <meta charset=utf-8/>
        <title>My First React Router App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        ${style}
      </head>
      <body>
      <div id="app">
        ${process.env.NODE_ENV === 'production' ? appHtml : `<div>${appHtml}</div>`}
      </div>
        <script src="/bundle.client.js"></script>
      </body>
    </html
   `;
}

var PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
	console.log('Production Express server running at localhost:' + PORT);
});
