import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { tokensaveRequest } from 'src/actions/authentication';

function getParameterByName(name) {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(document.location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

class Redirect extends Component {
    constructor(props){
        super(props);
        this.state = {
            accessToken: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(accessToken) {
        this.props.tokensaveRequest(accessToken);
        // localStorage.setItem('accessToken', accessToken);

        browserHistory.push('/'); 
        return true;    
    }
    
    componentDidMount() {
        const token = getParameterByName('access_token');
        this.setState({
            accessToken: atob(token)
        })
        this.handleLogin(atob(token));
    }

    render() {
        return (
            <div>
                Redirecting...
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.authentication.status.accessToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tokensaveRequest: (accessToken) => {
            return dispatch(tokensaveRequest(accessToken));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Redirect);