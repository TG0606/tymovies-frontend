import React, {Component} from 'react';
  import axios from 'axios';
  import styles from './Registration.module.css';

  const URL_USER = 'http://localhost:3000/users/'

class Registration extends Component {

  state = {
    email:'',
    name: '',
    password: '',
    password_confirmation: ''
  }


  handleEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  }

  handlePassword = event => {
    this.setState({ password: event.target.value });
  }

  handlePasswordConfirmation = event => {
    this.setState({password_confirmation: event.target.value});
  }

  createAccount = (email, name, password, password_confirmation) => {
    console.log({email: email,
      name: name,
      password: password,
      password_confirmation: password_confirmation
    });
    axios.post(URL_USER, {
    email: email,
    name: name,
    password: password,
    password_confirmation: password_confirmation
    })
    .then( res => {
    console.log(res);
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createAccount(this.state.email,
    this.state.name,
    this.state.password,
    this.state.password_confirmation);
  }

  render(){
    return(
    <div className={styles.createAccountBoxBorder}>
        <form onSubmit = {this.handleSubmit}>
          <br></br>
          <input type="text" placeholder="Email" onChange={this.handleEmail}/> <br/>
          <input type="text" placeholder="User Name" onChange={this.handleName}/> <br/>
          <input type="text" placeholder="Password" onChange={this.handlePassword}/> <br/>
          <input type="text" placeholder="Comfirmed Password" onChange={this.handlePasswordConfirmation}/> <br/>
          <br></br>
          <input type="submit" value="Sign Up"/>

        </form>
      </div>
    );
  }
}

export default Registration;
