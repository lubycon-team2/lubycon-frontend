/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import styled from '@emotion/styled';
import { loginRequest } from '../actions/authentication';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const NavGroup = styled('div')`
    display: flex;
    flex-direction: row;
    margin-top: 35px;
    margin-bottom: 0px;
    margin-right: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
    -webkit-box-pack: justify;
    justify-content: space-around;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-basis: 100%;
`;

const Menu = styled('div')`
    width: 147px;
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
    margin-left: 15px;
    font-family: sans-serif;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-basis: 409px;
`;

const LoginBtn = styled('div')`
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
    margin-left: 0px;
    font-family: sans-serif;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
    -webkit-box-flex: 0;
    flex-grow: 0;
`;

const Partying = styled('div')`
    color: black;
    padding-top: 25px;
    padding-left: 145px;
    width: 85px;
    height: 27px;
    font-family: SANS-SERIF;
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: 0.22px;
    text-align: left;
`;

const Describe = styled('div')`
    white-space: pre-wrap;
    padding-left: 56px;
    padding-top: 21px;
    padding-right: 55px;
    width: 264px;
    height: 62px;
    font-family: SANS-SERIF;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: center;
    color: #ece5ff;
`;


class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.status);
    }

    render() {
        let data = "구독료를 가볍게, 파팅";
        const addLineBreaks = (data) =>
            data.split('\n').map((text, index) => (
                <React.Fragment key={`${text}-${index}`}>
                {text}
                <br />
                </React.Fragment>
        ));
        const logoutButton = (
            <li>
                <a onClick={this.props.onLogout}>
                    <span>로그아웃</span>
                </a>
            </li>
        );
        return (
            <div>
                <div id="jb-container">
                    <div id="jb-header">
                        <Partying>Partying</Partying>
                    </div>
                    <NavGroup>
                        <Menu>
                            <a>홈</a>
                            <a>파티 목록</a>
                            <a>내 파티</a>
                        </Menu>
                        <LoginBtn>
                            <a>로그인</a>
                        </LoginBtn>
                    </NavGroup>
                    <div id="jb-content">
                        <Describe>
                            {addLineBreaks(data)}
                        </Describe>
                    </div>
                    <div className="wrapper" style={{position:"relative"}}>
                        <div id="image-group" style={{justifyContent:"space-around", backgroundImage:`url(${require("../assets/images/bigcircle.svg")})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                            <div style={{justifyContent:"space-around", backgroundImage:`url(${require("../assets/images/smallCircle.svg")})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status,
        accessToken: state.authentication.status.accessToken,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: () => {
            return dispatch(loginRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);