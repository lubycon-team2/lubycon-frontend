/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import styled from '@emotion/styled';
import { loginRequest } from '../actions/authentication';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const Partying = styled('div')`
    color: #ffffff;
    padding-top: 54px;
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

const Background = styled('div')`
    justify-content: space-around;
    position: absolute;
    top: 85%;
    width: 375px;
    height: 247px;
    background-color: white;
`;

const FacebookButton = styled('button')`
    background-color: #4185d8;
    margin-left: 33px;
    margin-top: 34px;
    margin-bottom: 11px; 
    width: 310px;
    height: 50px; 
    border: none;
    color: white;
    text-align: right;
    border-radius: 12px;
`;

const KakaoButton = styled('button')`
    background-color: #ffd77c;
    margin-left: 33px;
    margin-bottom: 11px; 
    width: 310px;
    height: 50px; 
    border: none;
    color: black;
    text-align: right;
    border-radius: 12px;
`;

const GoogleButton = styled('button')`
    background-color: #eb5864;
    margin-left: 33px;
    width: 310px;
    height: 50px; 
    border: none;
    color: white;
    text-align: right;
    border-radius: 12px;
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
                <div id="jb-container" style={{backgroundColor:"#a07cfc"}}>
                    <div id="jb-header">
                        <Partying>Partying</Partying>
                    </div>
                    <div id="jb-content">
                        <Describe>
                            {addLineBreaks(data)}
                        </Describe>
                    </div>
                    <div className="wrapper" style={{position:"relative"}}>
                        <div id="image-group" style={{justifyContent:"space-around", backgroundImage:`url(${require("../assets/images/bigcircle.svg")})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                            <div style={{justifyContent:"space-around", backgroundImage:`url(${require("../assets/images/smallCircle.svg")})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                                <div style={{display:"inline", paddingTop:"49.8px", width:"173px", paddingRight:"11px"}}>
                                    <img id="leftGlass" src={require("../assets/images/leftGlass.svg")} width="173px" style={{paddingTop:"40.8px"}}/>
                                </div>
                                <div style={{display:"inline", paddingTop:"55.8px", width:"187.5px"}}>
                                    <img className="rightGlass" src={require("../assets/images/rightGlass.svg")} width="172.6px;" style={{paddingTop:"39.4px"}}/>
                                </div>
                            </div>
                        </div>
                        <Background>
                            <FacebookButton>페이스북으로 로그인</FacebookButton>
                            <KakaoButton onClick={this.handleKakaoLogin}>카카오톡으로 로그인</KakaoButton>
                            <GoogleButton>구글로 로그인</GoogleButton>
                        </Background>
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