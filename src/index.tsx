import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { initFakeApiServer } from './fakeapi'

if(deveMockarApi()){
    initFakeApiServer()
}

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function deveMockarApi() {
  if(!!process.env.REACT_APP_CY) {
    return false;
  }
  return true;
}
