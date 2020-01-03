import React from 'react';
import {connect} from 'react-redux';
// import { Container } from './styles';
import * as CourseActions from '../../store/actions/course'

const Sidebar = ({modules,dispatch}) => (
    <div>
    <aside>
    {
        modules.map(module=>(
          
                <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson=>(
                        <li key={lesson.id} >
                            <a>{lesson.title}</a>
                            <button onClick={()=>dispatch(CourseActions.toggleLesson(module,lesson))}>Selecionar</button>
                        </li>
                    ))}
                </ul>
                </div>
            
        ))
    }
    </aside>
    </div>

);
const mapStateToProps = state => ({
    modules:state.course.modules
});

export default connect(state=>(mapStateToProps))(Sidebar);
