import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {Redirect} from "react-router-dom";
import '../App.css'
import NavAdmin from './NavAdmin';
import NavCustomer from './NavCustomer';

const CLIENT_ID ='225079078023-if27hrmk7lpsm8a6n7s828ib9luf15ss.apps.googleusercontent.com';

class GoogleBtn extends Component {
  
   constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
      accessToken: '',
      givenName:'',
      img:'../images/login.png',
      email:''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

    async login (response) {    
      if(response.accessToken){
        let isAdmin = await registerUser(response.profileObj.email);
        this.setState(state => ({
          isLogined: true,
          accessToken: response.accessToken,
          givenName:response.profileObj.givenName,
          img:response.profileObj.imageUrl,
          email:response.profileObj.email,
          isAdmin
        }));
      }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: '',
      givenName:'',
      img:'../images/login.png',
      email:''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
        return (
    <div>
      { this.state.isLogined
      ?
        this.state.isAdmin ? <><GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Logout'
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure} />
            < NavAdmin email={this.state.email} admin= {this.state.isAdmin} logined= {this.state.isLogined}/>
            </> :
              <><GoogleLogout
              clientId={CLIENT_ID}
              buttonText='Logout'
              onLogoutSuccess={this.logout}
              onFailure={this.handleLogoutFailure} />
              <Redirect to= "/dashboard"/>
              <NavCustomer email={this.state.email} admin= {this.state.isAdmin}  logined= {this.state.isLogined} />
               
              
              </>
            : <><GoogleLogin
            clientId={CLIENT_ID}
            buttonText='Login'
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            responseType='code,token' />      
            </>    
      }
      <img src={ this.state.img}
      alt=""
      />
      { this.state.givenName ? <h5>Welcome dear: <br/><br/> { this.state.givenName }</h5> : null } 
     
    </div>
    )
  }
}

async function registerUser (email) {
  let response = await fetch('https://api-pamiran.herokuapp.com/customers');
  const people= await response.json();
  const role = people.find((obj) => obj.Client_Role ==='admin')
    return email === role.EMAIL
}

export default GoogleBtn;