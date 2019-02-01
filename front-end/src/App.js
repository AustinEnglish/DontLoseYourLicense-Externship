import React, { Component } from 'react';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import LogoLogo from './components/logo/logo.js';
import Navbar from './components/navbar/navbar.js';
import { connect } from 'react-redux';
import './App.css';
import { getArticles } from './actions';


//ROUTES
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import SignUp from './components/signUp/signUp';
import Profile from './components/userProfile/profile';
import LogInForm from './components/login/login';
import Why from './components/signUp/why.js';


class App extends Component {


  componentDidMount() {
    this.props.getArticles();
}

  render() {
    return (
      <div>
        <div className ="row home_bar">
          <div className ="col-md-12">
            {/* Navbar */}
            <Navbar />
          </div>
        </div>
        <div id="outer-wrapper" className="index home">
          <div className="clear">
          </div>
          {/* Routes */}
          <Switch>
            {
              this.props.articles &&(
                <Route exact path='/' render={(renderProps) => <Home />} />
              )
            }
            <Route path='/signup' render={(renderProps) => <Why />} />
            <Route path='/profile' render={(renderProps) => <Profile />} />
            <Route path='/login' render={(renderProps) => <LogInForm/> } />
            <Route exact path="/linkedin" component={LinkedInPopUp} />
            {/* <Route  path='/admin' render={(renderProps) => <Admin /> } /> */}
          </Switch>
          {/* End of Content Wrapper */}
          <div className="clear">
          </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapPropsToDispatch = dispatch => ({
  getArticles: () => dispatch(getArticles())
})

export default connect(mapStateToProps, mapPropsToDispatch)(App);



