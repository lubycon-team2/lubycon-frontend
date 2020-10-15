/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import { loginRequest } from '../actions/authentication';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        console.log(this.props.status);
    }

    handleLogin(e) {
        let sns = e.currentTarget.value;
        
        return this.props.loginRequest(sns).then(
            () => {
                if(this.props.status === "SUCCESS" ) {
                    // create session data
                    let loginData = {
                        isLoggedIn: true,
                        accessToken: this.props.accessToken,
                    };
                    document.cookie = 'key=' + btoa(JSON.stringify(loginData)); // save session data in cookie 
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
                        <Link to='/' style={{textDecoration:'none', color:'white'}}><div>Partying</div></Link>
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
                            <button className="btn_facebook" value="facebook" onClick={this.handleLogin}>
                                <div className="btn_facebook_group">
                                    <div className="btn_facebook_logo">
                                        <img src={require("../assets/images/facebookLogo.svg")} />
                                    </div>
                                    <div className="btn_facebook_name">
                                        페이스북으로 로그인
                                    </div>
                                </div>
                            </button>
                            <button className="btn_kakao" value="kakao" onClick={this.handleLogin}>
                                <div className="btn_kakao_group">
                                    <div className="btn_kakao_logo">
                                        <img src={require("../assets/images/kakaotalkLogo.svg")} />
                                    </div>
                                    <div className="btn_kakao_name">
                                        카카오톡으로 로그인
                                    </div>
                                </div>
                            </button>
                            <button className="btn_google" value="google" onClick={this.handleLogin}>
                                <div className="btn_google_group">
                                    <div className="btn_google_logo">
                                        <img src={require("../assets/images/googleLogo.svg")} />
                                    </div>
                                    <div className="btn_google_name">
                                        구글로 로그인
                                    </div>
                                </div>
                            </button>
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
        loginRequest: (sns) => {
            return dispatch(loginRequest(sns));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);