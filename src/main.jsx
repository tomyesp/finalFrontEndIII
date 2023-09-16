import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import { ContextGlobal } from './Components/utils/global.context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <div>
      <App/>
  </div>
);
