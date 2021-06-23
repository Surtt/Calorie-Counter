import React, { useState } from 'react';
import i18next from 'i18next';
import resources from './locales/index';
import Title from './components/Title';
import Form from './components/Form';
import Lang from './components/Lang';

import './App.css';

const App = () => {
  const [lang, setLang] = useState('ru');
  const [buttonLng, setButtonLng] = useState('En');
  i18next.init({
    lng: lang,
    debug: true,
    resources,
  });
  const changeLang = (lng) => {
    if (lng === 'ru') {
      setLang('en');
      setButtonLng('Ру');
    } else {
      setLang('ru');
      setButtonLng('En');
    }
  };
  return (
    <article className="counter">
      <Title />
      <Form />
      <Lang changeLang={() => changeLang(lang)} buttonLng={buttonLng} />
    </article>
  );
}

export default App;
