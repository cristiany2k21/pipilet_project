import React from 'react';
import express from 'express';
import Webpack from "webpack";
import webpackConfig from "./webpack-dev-client.config";
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { match, RouterContext } from 'react-router'
import routes from './routes/index';
import reducers from './reducers';
import { Provider } from 'react-redux';

const compiler = Webpack(webpackConfig);
const app = express();

const store = createStore(reducers);

app.use(express.static('public'));

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(
        <Provider store={store}>
          <RouterContext {...props}/>
        </Provider>
      )
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})
function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
      <head>
        <meta charset=utf-8/>
        <title>My First React Router App</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="styles.min.css">
      </head>
      <body>
        <div id=app>${appHtml}</div>
        <script src="bundle.client.js"></script>
      </body>
    </html
   `
};

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});