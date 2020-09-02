import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Home from './Home';

class App extends Component {

  constructor(props) {
    super(props);
    // this.handleLogout = this.handleLogout.bind(this);
  }
  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
