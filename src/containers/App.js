import React, { Component } from 'react';
import { Header } from '.';
import { connect } from 'react-redux';
import { getStatusRequest, logoutRequest } from '../actions/authentication'; 
import { browserHistory } from 'react-router';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    // console.log('isLoggedIn status', this.props.status.isLoggedIn);
    this.state = {
      urlPath: this.props.location.pathname,
    }
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location => {
      this.setState({
        urlPath: location.pathname
      });
    })
  }

  handleLogout() {
    this.props.logoutRequest();
    localStorage.clear();
    browserHistory.push('/');
  } 
  
  render() {
    return (
      <div>
        {this.state.urlPath === '/login'? undefined :<Header isLoggedIn={this.props.status.isLoggedIn}
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
    getStatusRequest: (token) => {
      return dispatch(getStatusRequest(token));
    },
    logoutRequest: () => {
      return dispatch(logoutRequest());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
