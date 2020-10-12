/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import { loginRequest } from '../actions/authentication';
// import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { connect } from 'react-redux';
//import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from '@egjs/react-flicking';
import Flicking from '@egjs/react-flicking';
import { Parallax, Fade, AutoPlay } from '@egjs/flicking-plugins';


class Home extends Component {
    constructor(props) {
        super(props);
        console.log('isLoggedIn', this.props.isLoggedIn);
        console.log('accessToken', this.props.accessToken);
        this.state = {
            plugins: [],
            plug: [],
        }
        this.plugins = [new Fade(), new AutoPlay(2000, 'NEXT')];
        this.plug = [new Parallax("img", 4)];
    }

    render() {
        // this.plugins = [new Fade(), new AutoPlay(2000, 'NEXT')];
        // const loginBtn = (
        //     <Link className="loginout" to="/login">
        //         로그인
        //     </Link>
        // );

        // const logoutBtn = (
        //     <div className="loginout">
        //         <li>
        //             <a onClick={this.props.onLogout}>
        //                 <span>로그아웃</span>
        //             </a>
        //         </li>
        //     </div>
        // );

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
                    {/* <div className="main_header">
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
                    <hr className="hr"></hr> */}
                    <div className="main_content">
                        <div className="description">
                            구독료를 가볍게, 파팅
                        </div>
                        <div className="subdescription">
                            {addLineBreaks(data)}
                        </div>
                        <div id="parallax" className="plugins cover">
                            <Flicking
                                    className="flicking"
                                    gap={5}
                                    circular={true}
                                    plugins={this.plug}
                                    >
                                    <div className="panel">
                                        <div className="image-area">
                                            <div className="image-inner-area">
                                                <img src={require('../assets/images/priceCard.svg')}/>
                                            </div>
                                        </div>
                                        <div className="info">
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
                                                    <div className="division_img">
                                                    </div>
                                                </div>
                                                <hr className="hr_card"></hr>
                                                <div className="price_description_content">
                                                    <div className="upper">
                                                        <div className="upper_name">
                                                            기존 가격
                                                        </div>
                                                        <div className="upper_detail">
                                                            14,500
                                                        </div>
                                                    </div>
                                                    <div className="under">
                                                        <div className="under_name">
                                                            인원
                                                        </div>
                                                        <div className="under_detail">
                                                            4
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="hr_card"></hr>
                                                <div className="price_description_footer">
                                                    <div className="price_description_footer_name">
                                                        총합
                                                    </div>
                                                    <div className="price_description_footer_detail">
                                                        3,625원
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                    <img src="https://naver.github.io/egjs-flicking/images/bg02.jpg" />
                                    </div>
                                    <div className="panel">
                                        <img src="https://naver.github.io/egjs-flicking/images/bg03.jpg"  />
                                    </div>
                            </Flicking>
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