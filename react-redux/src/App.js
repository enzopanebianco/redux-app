import React,{Component} from 'react';
import Sidebar from './componentes/Sidebar/sidebar'
import Video from './componentes/Video/index'
import {Provider} from 'react-redux';
import './App.css';
import store from './store';


function App () {
  return (
    <div >
      <Provider store={store}>
      <Video />
      <Sidebar />
      {/* <Api /> */}
    
      </Provider>
    </div>
  );
  
}

export default App;
