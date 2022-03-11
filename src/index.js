import React from 'react';
import ReactDOM from 'react-dom';

import GA4React from "ga-4-react";

import { BrowserRouter } from "react-router-dom";

import './Fonts/Solar Vesta Serif.ttf';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ga4react = new GA4React(process.env.REACT_APP_GA4_TRACKING_ID);

(async _ => {

  await ga4react.initialize()
  .then(res => console.log("Analytics Success."))
  .catch(err => console.log("Analytics Failure."))
  .finally(() => {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root')
    );
  });
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
