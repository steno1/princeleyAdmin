import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './container/App.jsx';
import { DarkModeContextProvider } from './context/darkModeContext';
//import "tachyons"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DarkModeContextProvider>
  <App />
  </DarkModeContextProvider>
   
  </React.StrictMode>
);



