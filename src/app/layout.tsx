"use client"
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Home from './page';

const MyApp: React.FC = ( ) => {
  return (
    <Provider store={store}>
       <Home/> 
    </Provider>
  );
};

export default MyApp;