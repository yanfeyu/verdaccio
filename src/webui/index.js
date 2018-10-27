import './utils/__setPublicPath__';

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import pt from 'react-intl/locale-data/pt';

import App from './app';

// translated strings
import localeData from "./i18n/locales.json";

addLocaleData([...en,...es, ...pt]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = 
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

let rootNode = document.getElementById('root');

let renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <IntlProvider locale={language} messages={messages}>
        <Component/>
      </IntlProvider>
    </AppContainer>,
    rootNode
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp(App);
  });
}
