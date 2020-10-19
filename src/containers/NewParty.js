/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PhoneAuth} from '.';
// import { Link } from 'react-router';

class NewParty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        
    }
    componentDidMount() {
        
        // if (this.props.status.isLoggedIn === false) {
        //     console.log(this.props.status.isLoggedIn);
        //     browserHistory.push('/login');
        // }
    };
    render() {
        return (
            <PhoneAuth />
        );
    };
};

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewParty);