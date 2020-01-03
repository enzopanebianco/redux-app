import React, { useState } from 'react';
import useForm from '../../utils/formHooks/index'
import { useSelector, useDispatch } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import axios from 'axios';
import SaveToDo from "../SaveToDo/index";
// import { Container } from './styles';

export default function TodoList() {

    const [{ values, loading }, HandleChange, HandleSubmit] = useForm();
  
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [active, setActive] = useState(false);
    // ACTIONS
    function addTodo(text) {

        return ({ type: "ADD_TODO", text })
    }
    function toggleTodo(id) {

        return ({ type: "TOGGLE_TODO", id })
    }
    function removeTodo(id) {
        return ({ type: "REMOVE_TODO", id })
    }
    //DISPATCH CHAMANDO AS ACTIONS!
    const HandleText = () => {
        const { text } = values;
        dispatch(addTodo(text))

    };
    const HandleToggle = (id) => {

        dispatch(toggleTodo(id))
    }
    const DeleteTodo = (id) => {
        dispatch(removeTodo(id))
    }
    async function Save() {

        setActive(true);

    }
    return (
        <>
            <section>
                <h1 >To Do List!</h1>
                <form onSubmit={HandleSubmit(HandleText)}>
                    <div className="send" >
                        <input
                            onChange={HandleChange}
                            type="text"
                            name="text"
                            placeholder="Type your List"
                        />

                        <button type="submit">{loading ? "Enviando..." : "Send"}</button>
                    </div>

                    {todos.map(todo => (
                        <div className="list" >
                            <li key={todo.id} >
                                {todo.complete ? <strong>{todo.text}<FaCheck size={16} color="#fff" /></strong> : todo.text}
                            </li>
                            <div>
                                <button type='button' style={{ background: 'orangered' }} onClick={() => HandleToggle(todo.id)} >Toogle</button>
                                <button type='button' style={{ background: 'red' }} onClick={() => DeleteTodo(todo.id)} >Remove</button>
                            </div>
                        </div>
                    ))}

                </form>
                <div className="save" >
                {active ? <></>:
                    <button type="button" onClick={() => Save()} >Save</button>
                }
                </div>

            </section>
            {active && <SaveToDo todos={todos} />}
        </>
    );
}
