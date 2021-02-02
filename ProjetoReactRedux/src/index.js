import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import Store from './Redux/store';
import {Provider} from 'react-redux';

console.log(Store.getState());

ReactDOM.render(

  <Provider store={Store}>
  <div style={{display:'flex'}}>
  <Products />
  <ShoppingCart />
  </div>
  </Provider>
  ,document.getElementById('root')
);


