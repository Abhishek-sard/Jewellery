import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import "./index.css"
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import store from "./Redux/store.js";
import { persistor } from "./Redux/store.js";
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
        <ToastContainer />
      </PersistGate>
      </Provider>
  </StrictMode>,
)
