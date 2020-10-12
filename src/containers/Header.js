import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Header extends Component {
    // constructor(props) {
    //     super(props);   
    // }

    render() {
        const loginBtn = (
            <Link to="/login">
                <div className="loginout">
                    로그인
                </div>
            </Link>
        );

        const logoutBtn = (
                <button onClick={this.props.onLogout}>
                    로그아웃
                </button>
        );

        return (
            <>
                <div className="main_header">
                    <div>Partying</div>
                </div>
                <div className="nav_group">
                    <div className="navs">
                        <a href="#">홈</a>
                        <a href="#">파티 목록</a>
                        <a href="#">내 파티</a>
                    </div>
                    { this.props.isLoggedIn ? logoutBtn : loginBtn}
                </div>
                <hr className="hr"></hr>
            </>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool,
    onLogout: PropTypes.func,
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined"); }
};

export default Header;

