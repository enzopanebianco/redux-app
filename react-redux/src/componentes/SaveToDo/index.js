import React from 'react';
import useForm from '../../utils/formHooks/index'
// import { Container } from './styles';
import { FaCheck } from 'react-icons/fa';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
export default function SaveToDo({ todos }) {
    const [{ values, loading }, HandleChange, HandleSubmit] = useForm();
    const dispatch = useDispatch();
    const url = "https://5e07f10b434a370014168896.mockapi.io/List";
    const options = [
        { value: "#ff7650", nome: "LightCoral" },
        { value: "#80bdde", nome: "LightBlue" },

        { value: "#e1ff5d", nome: "LightGreen" },
    ]
    
    async function Save() {
        console.log(values);
        const { title, color } = values;

        const dados = {
            todos,
            title,
            color
        }
        const request = await Axios.post(url, dados)
        todos = [];
        
     

    }
    return (
        <>
            <section className="Create">
                <form className="formCreate" onSubmit={HandleSubmit}>
                    <div className="container">
                        <div className="flex title">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                required="true"
                                onChange={HandleChange}
                                placeholder="title"
                            />
                        </div>
                        <div className="flex todos">
                            <label>Your List</label>
                            {todos.map(todo => <li key={todo.id} >
                                {todo.complete ? <strong>{todo.text}<FaCheck size={16} color="#fff" /></strong>
                                    : todo.text}
                            </li>)}
                        </div>
                        <div>
                            <label>Color</label>
                            <select name="color" onChange={HandleChange}>
                                {options.map(item => (
                                    <option value={item.value} key={item.value} style={{ background: item.value }} >
                                        {item.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button type="button" onClick={() => Save()} >
                        {loading ? <a>Saving"</a>
                            : <a>Save</a>}</button>
                </form>
            </section>
        </>
    );
}
