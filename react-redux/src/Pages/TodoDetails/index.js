import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { } from "../../componentes/TodoList/";
import { Container, Header, Title, List, Button } from './styles';
import { FaCheck, FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function TodoDetails(props) {
    const [todo, setTodo] = useState({})
    const [arr, setArr] = useState([])
    async function get() {
        const { id } = props.match.params
        const request = await Axios.get(`https://5e07f10b434a370014168896.mockapi.io/List/${id}`);
        const data = request.data;

        setTodo(data);
        setArr(data.todos);
    }
    useEffect(() => {
        get();
    }, [])
    function goback() {
        // BrowserRouter.goBack;
    }
    return (
        <>
            <Header style={{ background: todo.color }}>
                <Title>
                    <Button  >
                    <Link to="/">
                    <FaArrowCircleLeft size={30} color="#fff" /></Link>
                    </Button>
                    {todo.title}
                </Title>
            </Header>
            <h1>Details of your list</h1>
            <List>
                {arr.map(item => <li key={item.id}>{item.complete ?
                    <strong>{item.text}<FaCheck size={16} color="#fff" /></strong>
                    : item.text}</li>)}
            </List>

        </>
    );
}
