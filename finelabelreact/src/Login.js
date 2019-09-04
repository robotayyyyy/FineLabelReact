import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Login extends React.Component {
  constructor(props){
	super(props);
	this.state = {
		userName:'',
		password:'',
		debugMessage:'',
		uiPasswordType:'password',
		formDistination:''
	}
  }	
  changeHandler = (event) =>{
	  let name = event.target.name;
	  let val = event.target.value;
	  this.setState({[name]: val});
  }
  mouseDownHandler = (event) =>{
	  let name = event.target.name;
	  let val = event.target.value;
	  if(name == 'togglePasswordBtn'){//show password
	    this.setState({uiPasswordType: 'text'});
	  }
  }
  mouseUpHandler = (event) =>{
	  let name = event.target.name;
	  let val = event.target.value;
	  if(name == 'togglePasswordBtn'){//hide password
		this.setState({uiPasswordType: 'password'});
	  }
  }
  clickHandler = (event) =>{
	  let name = event.target.name;
	  let val = event.target.value;
	  if(name == 'submitBtn'){//click submit
		if( this.validateLogin(this.state.userName,this.state.password) ){
		  this.setState({debugMessage: ''});
		  alert('hi '+ this.state.userName);
		}
		else{
		  event.preventDefault();
		  this.setState({debugMessage: 'Username or password incorrect'});
		}
	  }
	  if(name == 'registerBtn'){//click register
		event.preventDefault();
		this.setState({debugMessage: 'Not now'});
	  }
  }
  validateLogin = (userName,password) =>{//check usr ans pass
	  if(userName=='admin' && password=='1234'){return(1);}
	  else{return(0);}
  }
  render() {
	let header = '';
	  if ( this.state.userName || this.state.password ){
	    header = <p>{this.state.userName} : {this.state.password}</p>
	}
    return (
	<div>
	  
	  {header}
      <form>
	    <p>Username</p>
	    <input type='text' name='userName' onChange={this.changeHandler} / >
		<p>Password</p>
		<input type={this.state.uiPasswordType} name='password' onChange={this.changeHandler} / >
		<button type='button' name='togglePasswordBtn' onMouseDown={this.mouseDownHandler} onMouseUp={this.mouseUpHandler} > show/hide </button>
		<br />
		<button type='submit' name='submitBtn' onClick={this.clickHandler}>Login</button>
		<button type='submit' name='registerBtn' onClick={this.clickHandler}>Register</button>
	  </form>
	  
	  <p>{this.state.debugMessage}</p>
	</div>
    );
  }
}

export default Login;