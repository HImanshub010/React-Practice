import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Setup from './tutorial/12-memo-useMemo-useCallback/setup'

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>

    <Setup />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

