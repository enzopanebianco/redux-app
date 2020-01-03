import styled from 'styled-components';

export const Container = styled.div`
  position:fixed;
  background: #4601e7;
  height:100%;
  top:0%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:10%;

`;
export const List = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width: 80%;
    margin:0 auto;
    a{
        color:white;
        font-weight:bold;
        font-size:10pt;
    }
`;
