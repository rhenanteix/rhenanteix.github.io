import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import bgImage from '../../image/signin/logo.png';
import SignInStyleWrapper from './signin.style';

const { login } = authAction;

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleLogin = () => {
    const { login } = this.props;
    const { username, password } = this.state;
    const data = { username, password };
    login(data);
    this.props.history.push('/dashboard');
  };
  updateUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  };
  updatePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };
  render() {
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;

    if (this.props.isLoggedIn) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <img src={bgImage} alt="" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Email" onChange={this.updateUsername} />
              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="password" placeholder="Senha" onChange={this.updatePassword} />
              </div>

              <div className="isoInputWrapper">
                <Button type="primary" onClick={this.handleLogin}>
                  Entre com sua conta do midiacode
                </Button>
              </div>

              <p className={this.props.failLogin} >
                Usuário ou senha incorreto
              </p>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false,
    failLogin: state.Auth.get('failLogin') !== null ? 'isoHelperText active' : 'isoHelperText inactive'
  }),
  { login }
)(SignIn);
