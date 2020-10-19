/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/authentication';

class Header extends Component {

    render() {
        const loginBtn = (
            <Link to="/login" className="nav">
                <button className="loginout">
                    로그인
                </button>
            </Link>
        );

        const logoutBtn = (
                <button className="loginout" onClick={this.props.onLogout}>
                    로그아웃
                </button>
        );

        return (
            <div>
                <div className="main_header">
                    <Link to="/" className="nav"><div>Partying</div></Link>
                </div>
                <div className="nav_group">
                    <div className="navs">
                        <Link to="/" className="nav">홈</Link>
                        <Link to="/" className="nav">파티 목록</Link>
                        <Link to="/party" className="nav">내 파티</Link>
                    </div>
                    { this.props.isLoggedIn ? logoutBtn : loginBtn}
                </div>
                <hr className="hr"></hr>
            </div>
        );
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    onLogout: PropTypes.func,
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined"); }
};

const mapStateToProps = (state) => {
    return {
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      logoutRequest: () => {
        return dispatch(logoutRequest());
      }
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(Header);

