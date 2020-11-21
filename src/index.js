import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Setup from './tutorial/7-prop-drilling/setup/1-prop-drilling'

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>

    <Setup />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

