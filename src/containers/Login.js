/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import styled from '@emotion/styled';
import { loginRequest } from '../actions/authentication';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const FacebookButton = styled('button')`
    background-color: #4185d8;
    width: 310px;
    height: 50px; 
    border: none;
    color: white;
    text-align: right;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin: 10px 10px;
`;

const KakaoButton = styled('button')`
    background-color: #ffd77c; 
    width: 310px;
    height: 50px;
    border: none;
    color: black;
    text-align: right;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin: 10px 10px;
`;

const GoogleButton = styled('button')`
    background-color: #eb5864;
    width: 310px;
    height: 50px;
    border: none;
    color: white;
    text-align: right;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin: 10px 10px;
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleKakaoLogin = this.handleKakaoLogin.bind(this);
        console.log(this.props.status);
    }

    handleKakaoLogin() {
        return this.props.loginRequest().then(
            () => {
                if(this.props.status === "SUCCESS" ) {
                    // create session data
                    // let loginData = {
                    //     isLoggedIn: true,
                    // };
                    // document.cookie = 'key=' + btoa(JSON.stringify(loginData)); // save session data in cookie 
                    console.log(this.props.accessToken);
                    browserHistory.push('/'); 
                    return true;
                } else {
                    return false;
                }
            }
        )
    }
    render() {
        let data = "구독 공유 서비스 파팅에 오신것을 환영합니다!\n무궁무진한 컨텐츠를 새로운 친구들과\n함께 즐길 수 있는 기회를 놓치지 마세요!";
        const addLineBreaks = (data) =>
            data.split('\n').map((text, index) => (
                <React.Fragment key={`${text}-${index}`}>
                {text}
                <br />
                </React.Fragment>
        ));
        return (
            <div>
                <div className="container" >
                    <div className="header">
                        <div>Partying</div>
                    </div>
                    <div className="content">
                        <div>
                            {addLineBreaks(data)}
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="backgroundImage">
                        </div>
                    </div>
                    <div className="buttonGroup">
                        <div className="buttons">
                            <FacebookButton>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <div>
                                        <img id="loginImage" src={require("../assets/images/facebookLogo.svg")} />
                                    </div>
                                    <div>
                                        페이스북으로 로그인
                                    </div>
                                </div>
                            </FacebookButton>
                            <KakaoButton onClick={this.handleKakaoLogin}>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <div>
                                        <img id="loginImage" src={require("../assets/images/kakaotalkLogo.svg")} />
                                    </div>
                                    <div>
                                        카카오톡으로 로그인
                                    </div>
                                </div>
                            </KakaoButton>
                            <GoogleButton>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <div>
                                        <img id="loginImage" src={require("../assets/images/googleLogo.svg")} />
                                    </div>
                                    <div>
                                        구글로 로그인
                                    </div>
                                </div>
                            </GoogleButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);