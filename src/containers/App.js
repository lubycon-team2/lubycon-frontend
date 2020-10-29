import React, { Component } from 'react';
import { Header } from '.';
import { connect } from 'react-redux';
import { setStatus, logoutRequest } from '../actions/authentication'; 
import { browserHistory } from 'react-router';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    // console.log('isLoggedIn status', this.props.status.isLoggedIn);
    this.state = {
      urlPath: this.props.location.pathname,
    }
    console.log('pathname', this.props.location.pathname)
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location => {
      this.setState({
        urlPath: location.pathname
      });
    })

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo !== null && userInfo.isLoggedIn) {
      // TODO: 로그인 state  업데이트 
      // 로컬스토리지 - 토큰 저장 userInfo json으로 저장하기 
      this.props.setStatus(userInfo.accessToken);
    }
  }

  handleLogout() {
    this.props.logoutRequest();
    localStorage.clear();
    browserHistory.push('/');
  } 
  
  render() {
    return (
      <div>
        {location.urlPath === '/login' || location.urlPath === '/party/new'? undefined :<Header isLoggedIn={this.props.status.isLoggedIn}
                onLogout={this.handleLogout} />}
        {this.props.children}
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (token) => {
      return dispatch(setStatus(token));
    },
    logoutRequest: () => {
      return dispatch(logoutRequest());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
