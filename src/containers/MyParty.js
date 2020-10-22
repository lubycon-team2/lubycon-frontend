/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PhoneAuth, NewParty } from '.';
// import { Link } from 'react-router';

class MyParty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        
    }

    render() {
        return (
            <div>
                {localStorage.getItem('isPhoneAuth') === 'SUCCESS' ? <NewParty/> : <PhoneAuth/>}
            </div>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(MyParty);