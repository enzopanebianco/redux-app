import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Container,List } from './styles';
import { FaClipboardList } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Border() {
    const [list,setList]= useState([]);
    async function get(){
        const request = await axios.get("https://5e07f10b434a370014168896.mockapi.io/List")
        const data = await request.data
      
        setList(data);
        }
    useEffect(()=>{
        get();
    },[list])
    return (
    <>
    <Container>
        
    {list.map(item=>(
        <List key={item.id}>
            <Link to={`details/${item.id}`} ><FaClipboardList size={30} color={item.color}/></Link>
            <a>{item.title}</a>
        </List>
    ))}
    </Container>
    </>
  );
}
