import React from "react";
import { register, updateProfile, getProfile } from "../state/actionCreators";
import { connect } from "react-redux";
import styled,{keyframes} from "styled-components";
import { FaUser, FaLock } from "react-icons/fa";
import {slideInRight} from 'react-animations';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(-8vh);
  @media (max-width:500px){
    transform: translateY(-7vh);
    }
  h2 {
    font-family: "Timmana", sans-serif;
    text-align: center;
    @media (max-width:500px){
      font-size:1.2em
    }
  }

`;

const Form = styled.form`
  background-color: white;
  border-radius: 10px;
  opacity:0.8;
  padding-left: 5%;
  padding-right:5%;
  padding-top:7vh;
  padding-bottom:3vh;
  font-family: "Roboto" sans-serif;
  display: flex;
  flex-direction: column;
`;
const Div  = styled.div`
 width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4.2vh;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10%;
      text-align: center;
      color: white;
      height: 3.8vh;
      background-color: lightgray;
      border-radius: 5px 0px 0px 5px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    input {
      width: 90%;
      height: 3.8vh;
      background-color: grey;
      outline: none;
      border: none;
      padding-left:5%;
      border-radius: 0px 5px 5px 0px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
        &::placeholder{
            color:white;
            font-size:1.5em;
        }
    }`

const Button = styled.button`
  width: 40%;
  margin-left:30%;
  margin-top:2%;
  background-color: grey;
  padding: 0% 5%;
  border-radius: 5px;
  outline:none;
  height:4vh;
  font-size:1em;
  color:white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
&:hover{
    background-color:black;
}`;
const Registered = styled.div`
    background-color:white;
    opacity:0.8;
    margin-top:3%;
    border-radius:10px;
    p{
        color:black;
        text-align:center;
        font-weight:bolder;
    }`;
const Section = styled.div `
`;
const UserError = styled.div `
  animation:2s ${keyframes `${slideInRight}`};
  display:flex;
  text-align:center;
  justify-content:center;
  align-items:center;
    color:red;
`;
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      height: "",
      weight: "",
      email: "",
      text: "Register on Lifted",
      action: "Register",
      src: this.imagesrc,
      value: this.registerUser,
      pass: "",
      confirmPword: ""
    };
  }
  imagesrc;
  change = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  updateUser = e => {
    e.preventDefault();
    this.props.updateProfile(this.props.match.params.id, this.state);
    this.props.history.push({
      pathname: `/users/${this.props.match.params.id}`
    });
  };


  registerUser = event => {
    event.preventDefault();
    if(this.state.pass === this.state.confirmPword){
      this.props.register({
          "username" :this.state.username, 
          "password":this.state.pass}
    );
      }
  };
  render() {
    return (
      <Container>
     
        <Form onSubmit={e => this.state.value(e)}>
        <h2>{this.state.text}</h2>
        {this.state.confirmPword && this.state.confirmPword!== this.state.pass && <UserError> Password does not match</UserError> }
        {this.props.error===401 && <UserError> Please provide a username and password.</UserError> }
        {this.props.error ===500 && <UserError> Username already taken</UserError>}
        <Div>
        <span>
        <FaUser />
      </span>
          <input
            type="text"
            name='username'
            value={this.state.username}
            onChange={e => this.change(e)}
            placeholder="Username"
            required
          />
          </Div>
            <Section>
            <Div>
            <span>
            <FaLock />
          </span>
          <input
            type ="password"
            name ='pass'
            value={this.state.pass}
            onChange={e => this.change(e)}
            placeholder="Password"
            required
       
          />
          </Div>
          <Div>
          <span>
          <FaLock />
        </span>
          <input
            type="password"
            name='confirmPword'
            value={this.state.confirmPword}
            onChange= {e => this.change(e)}
            placeholder="Confirm Password"
    
          />
          </Div>
        
          </Section>
          <Button onClick={e => this.state.value(e)}>{this.state.action}</Button>
        </Form>
        <Registered>
        <p>Already Lifting?</p>
        <Button onClick ={() =>this.props.openLogin()}>Login</Button>
        </Registered>
      </Container>
    );
  }
}
const mapStateToProps = ({userReducer, loginReducer}) =>{
    return ({
        updatingUser: userReducer.updatingUser,
        registering: loginReducer.registering,
        error:loginReducer.error
    })
}
export default connect(
mapStateToProps,
  { register, updateProfile, getProfile }
)(Register);
