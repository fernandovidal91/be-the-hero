import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';//1
//Está importando o arquivo routes
import Routes from './src/routes';

export default function App() {//1
  return (//1
    <Routes />
  );
}

