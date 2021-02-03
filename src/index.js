import React from 'react';
import ReactDOM from 'react-dom';
import { speechProvider, SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="05abb4b8-6016-49fd-afd6-ff5d8757422b" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
