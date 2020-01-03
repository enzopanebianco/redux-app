import React from 'react';
import { Provider } from "react-redux";
import store from '../store/storeDucks'
// import { Container } from './styles';
import TodoList from '../componentes/TodoList'
import Border from '../componentes/Border';
export default function DuckTest() {
  return (
    <>
    <Border />
    <Provider store={store}>
       <TodoList />     

    </Provider>
    </>
  );
}
