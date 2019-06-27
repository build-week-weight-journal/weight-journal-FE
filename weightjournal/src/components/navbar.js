import React from "react";
import styled from "styled-components";
// import { FaUserCircle } from "react-icons/fa";
import { FaPowerOff, FaDumbbell } from "react-icons/fa";
import { NavLink ,Redirect} from "react-router-dom";
import decode from "./decode";
import {logout} from '../state/actionCreators'
import {connect} from 'react-redux';


const Container = styled.div`
  opacity: 0.8;
  width: 76%;
  z-index: 2;
  display: flex;
  position:fixed;
  top:0;
  margin-top:0;
  background-color:white;
  padding:0 2%;
  h1 {
    padding-left: 5%;
    color: green;
  }
  p {
    font-size: 1.5rem;
    color:green;
    text-shadow: 1px 1px black
  }
  a{
      text-decoration:none;
      color:green;
      font-size:1.4rem;
      text-shadow: 1px 1px black;
      &:hover{
          color:black;
      }
  }
  button{
      width:10%;
      border-radius:5px 0px 0px 5px;
      border:none;
      height:80%;
      font-size:1.5rem;
    color:green

  }
`;
const RightSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo= styled.div `
display:flex;
width: 50%;
align-items:center;
  div{display:flex;
    align-items:center;
    justify-content:center;
      background-color:green;
      border-radius:50%;
      width:8%;
      height:60%;
      font-size:1.5rem;
      color:white;
  }
`;
const Navbar = (props) => {
  const id = decode().subject;
  const username = decode().username;
  const name = username.replace(
    username.charAt(0),
    username.charAt(0).toUpperCase()
  ); 
  const logout= ()=>{
    props.logout()
    window.location.reload()
  }
  return (
    <Container>
    {console.log(props)}
    <Logo><div><FaDumbbell/></div>
    <h1> Lifted</h1></Logo>
    
      <RightSection>
        <p>Welcome {name}</p>
        <NavLink to={`users/${id}`}>
          View Profile
          {/*<div>
        <FaUserCircle />
            {username} 
            </div>*/}
        </NavLink>
        <button onClick={() =>logout()}>
            <FaPowerOff />
        </button>
      </RightSection>
    </Container>
  );
};
export default connect(null , {logout}) (Navbar)
