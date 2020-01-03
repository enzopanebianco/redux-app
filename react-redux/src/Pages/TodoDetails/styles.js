import styled from 'styled-components';

export const Container = styled.div`
  
`;
export const Header = styled.header`
    display:flex;
    align-items:center; 
    justify-content:left;
    height:80px;
    
`;
export const Title = styled.h2`
    width:30%;
    color:white;
  
    display:flex;
    justify-content:space-evenly;
    font-size:21pt;
`;
export const List = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:70%;
    
    margin:0 auto;
 
     justify-content: space-evenly;
    li{
        list-style-type: none;
        width: 70%;
        font-size: 15pt;
        margin-top:10px;
        background: rgb(52, 3, 167);
        color: white;
         padding: 7px 0px 7px 15px;
    }

`
export const Button= styled.button`
    background:transparent;
    border:none;
    :hover{
       color:#ccc;
    }
    cursor:pointer;


`;