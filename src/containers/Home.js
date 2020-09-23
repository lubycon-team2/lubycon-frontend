/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import { loginRequest } from '../actions/authentication';
// import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        console.log('isLoggedIn', this.props.isLoggedIn);
        console.log('accessToken', this.props.accessToken);
    }

    render() {
        const loginBtn = (
            <Link to="/login">
                <div className="loginout">
                    <a>로그인</a>
                </div>
            </Link>
        );

        const logoutBtn = (
            <Link to="/">
                <div className="loginout">
                    <a>로그아웃</a>
                </div>
            </Link>
        );

        let data = "친구들과 편리하게, 새로운 사람과도 안전하게,\n구독하는 서비스를 한눈에";
        const addLineBreaks = (data) =>
            data.split('\n').map((text, index) => (
                <React.Fragment key={`${text}-${index}`}>
                {text}
                <br />
                </React.Fragment>
        ));
        
        return (
            <div>
                <div className="main">
                    <div className="main_header">
                        <div>Partying</div>
                    </div>
                    <div className="nav_group">
                        <div className="navs">
                            <a>홈</a>
                            <a>파티 목록</a>
                            <a>내 파티</a>
                        </div>
                        { this.props.isLoggedIn ? logoutBtn : loginBtn}
                    </div>
                    <hr className="hr"></hr>
                    <div className="main_content">
                        <div className="description">
                            구독료를 가볍게, 파팅
                        </div>
                        <div className="subdescription">
                            {addLineBreaks(data)}
                        </div>
                        <div className="main_wrapper">
                            <div className="price_card_img">
                            </div>
                        </div>
                        <div className="price_description">
                            <div className="price_description_header">
                                <div>
                                    <div className="price_description_header_main">
                                        넷플릭스
                                    </div>
                                    <div className="price_description_header_sub">
                                        프리미엄
                                    </div>
                                </div>
                                <div>
                                    <i class="fas fa-divide fa-2x"></i>
                                </div>
                            </div>
                            <hr className="hr_card"></hr>
                        </div>
                    </div>
                    <div className="wrapper" style={{position:"relative"}}>
                        {/* <div id="image-group" style={{justifyContent:"space-around", backgroundImage:`url(${require("../assets/images/bigcircle.svg")})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                            <div style={{justifyContent:"space-around", backgroundImage:`url(${require("../assets/images/smallCircle.svg")})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status,
        isLoggedIn: state.authentication.status.isLoggedIn,
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