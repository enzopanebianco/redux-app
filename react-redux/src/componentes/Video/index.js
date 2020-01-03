import React, { Component } from 'react';

import {connect} from 'react-redux';


// import { Container } from './styles';

const Video = ({activeLesson,activeModule}) => (
      <div>
        <strong>Modulo {activeModule.title}</strong>
        <strong>Aula {activeLesson.title}</strong>
      </div>

);

export default connect(state=>({
  activeModule:state.course.activeModule,
  activeLesson:state.course.activeLesson
}))(Video);


