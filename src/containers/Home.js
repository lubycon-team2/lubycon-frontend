/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Flicking from '@egjs/react-flicking';
import { Fade, AutoPlay } from '@egjs/flicking-plugins';


class Home extends Component {
    constructor(props) {
        super(props);
        // console.log('isLoggedIn', this.props.isLoggedIn);
        console.log('accessToken', this.props.accessToken);
        this.state = {
            plugins: [],
        }
        this.plugins = [new Fade(), new AutoPlay(2000, 'NEXT')];
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        browserHistory.push('/login');
    }

    render() {
        let data = "친구들과 편리하게, 새로운 사람과도 안전하게,\n구독하는 서비스를 한눈에";
        const addLineBreaks = (data) =>
            data.split('\n').map((text, index) => (
                <React.Fragment key={`${text}-${index}`}>
                {text}
                <br />
                </React.Fragment>
        ));

        const doLoginBtn = (
            <div className="join_now">
                <button className="btn_join_now" onClick={this.routeChange}>
                    <div className="btn_join_now_main">
                        <div className="btn_join_now_content">
                            <div className="btn_join_now_content_img">
                                <img src={require("../assets/images/join_circle.svg")} />
                            </div>
                            <div className="btn_join_now_content_txt">
                                Sign in
                            </div>
                        </div>
                        <div className="btn_join_now_describe">
                            <div className="login">
                                로그인하세요!
                            </div>
                            <div className="party_member">
                                <div className="member_1"> 파티에 참여하기 위해서</div> 
                                <div className="member_2">아주 간단한 회원가입이 필요합니다.</div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        );
        
        return (
            <div>
                <div className="main">
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
                                    duration={600}
                                    plugins={this.plugins}
                                    >
                                    <div className="panel">
                                        <div className="image-area">
                                            <div className="image-inner-area">
                                                <img src={require('../assets/images/pricecard_netflix.svg')}/>
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
                                                        <img src={require('../assets/images/divide.svg')}/>
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
                                        <div className="image-area">
                                            <div className="image-inner-area">
                                                <img src={require('../assets/images/pricecard_wave.svg')}/>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="price_description">
                                                <div className="price_description_header">
                                                    <div>
                                                        <div className="price_description_header_main">
                                                            웨이브
                                                        </div>
                                                        <div className="price_description_header_sub">
                                                            프리미엄
                                                        </div>
                                                    </div>
                                                    <div className="division_img">
                                                        <img src={require('../assets/images/divide.svg')}/>
                                                    </div>
                                                </div>
                                                <hr className="hr_card"></hr>
                                                <div className="price_description_content">
                                                    <div className="upper">
                                                        <div className="upper_name">
                                                            기존 가격
                                                        </div>
                                                        <div className="upper_detail">
                                                            12,900
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
                                                        3,2255원
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="image-area">
                                            <div className="image-inner-area">
                                                <img src={require('../assets/images/pricecard_watcha.svg')}/>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="price_description">
                                                <div className="price_description_header">
                                                    <div>
                                                        <div className="price_description_header_main">
                                                            왓챠
                                                        </div>
                                                        <div className="price_description_header_sub">
                                                            프리미엄
                                                        </div>
                                                    </div>
                                                    <div className="division_img">
                                                        <img src={require('../assets/images/divide.svg')}/>
                                                    </div>
                                                </div>
                                                <hr className="hr_card"></hr>
                                                <div className="price_description_content">
                                                    <div className="upper">
                                                        <div className="upper_name">
                                                            기존 가격
                                                        </div>
                                                        <div className="upper_detail">
                                                            12,900
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
                                                        3,225원
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="image-area">
                                            <div className="image-inner-area">
                                                <img src={require('../assets/images/pricecard_apple.svg')}/>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="price_description">
                                                <div className="price_description_header">
                                                    <div>
                                                        <div className="price_description_header_main">
                                                            애플 뮤직
                                                        </div>
                                                        <div className="price_description_header_sub">
                                                            프리미엄
                                                        </div>
                                                    </div>
                                                    <div className="division_img">
                                                        <img src={require('../assets/images/divide.svg')}/>
                                                    </div>
                                                </div>
                                                <hr className="hr_card"></hr>
                                                <div className="price_description_content">
                                                    <div className="upper">
                                                        <div className="upper_name">
                                                            기존 가격
                                                        </div>
                                                        <div className="upper_detail">
                                                            13,300
                                                        </div>
                                                    </div>
                                                    <div className="under">
                                                        <div className="under_name">
                                                            인원
                                                        </div>
                                                        <div className="under_detail">
                                                            6
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="hr_card"></hr>
                                                <div className="price_description_footer">
                                                    <div className="price_description_footer_name">
                                                        총합
                                                    </div>
                                                    <div className="price_description_footer_detail">
                                                        2,216원
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Flicking>
                        </div>
                        <div className="logo_group">
                            <div className="logos">
                                <div>
                                    <button className="btn_netflix">
                                        <div className="btn_netflix_logo">
                                            <img src={require("../assets/images/logo_netflix.png")} />
                                        </div>
                                    </button>
                                    <div className="btn_name">
                                        넷플릭스
                                    </div>
                                </div>
                                <div>
                                <div>
                                    <button className="btn_wave">
                                        <div className="btn_wave_logo">
                                            <img src={require("../assets/images/logo_wave.png")} />
                                        </div>
                                    </button>
                                    <div className="btn_name">
                                        웨이브
                                    </div>
                                </div>
                                </div>
                                <div>
                                    <button className="btn_watcha">
                                        <div className="btn_watcha_logo">
                                            <img src={require("../assets/images/logo_watcha.png")} />
                                        </div>
                                    </button>
                                    <div className="btn_name">
                                        왓챠
                                    </div>
                                </div>
                                <div>
                                    <button className="btn_apple">
                                        <div className="btn_apple_logo">
                                            <img src={require("../assets/images/logo_apple.svg")} />
                                        </div>
                                    </button>
                                    <div className="btn_name">
                                        애플 뮤직
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="party-group">
                            <div className="partys">
                                <button className="btn_party">
                                    <div className="btn_party_main">
                                        <div className="btn_party_content">
                                            <div className="btn_party_content_header">
                                                애플 뮤직 공유
                                            </div>
                                            <div className="btn_party_content_price">
                                                4,737원
                                            </div>
                                            <div className="btn_party_content_footer">
                                                결제주기 / 12개월
                                            </div>
                                        </div>
                                        <div className="btn_party_footer">
                                            <div className="arrow">
                                                <img src={require('../assets/images/right_arrow2x.png')} />
                                            </div>
                                            <div className="party_member">
                                                <div> 4</div> 
                                                <div className="total">/6</div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button className="btn_party">
                                    <div className="btn_party_main">
                                        <div className="btn_party_content">
                                            <div className="btn_party_content_header">
                                                애플 뮤직 공유
                                            </div>
                                            <div className="btn_party_content_price">
                                                4,737원
                                            </div>
                                            <div className="btn_party_content_footer">
                                                결제주기 / 12개월
                                            </div>
                                        </div>
                                        <div className="btn_party_footer">
                                            <div className="arrow">
                                                <img src={require('../assets/images/right_arrow2x.png')} />
                                            </div>
                                            <div className="party_member">
                                                <div> 4</div> 
                                                <div className="total">/6</div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>                            
                        </div>
                        <div className="view_more">
                            <div>
                                <button className="view_more_btn">
                                    <img src={require("../assets/images/btn_view_more.svg")} />
                                    <div className="view_more_btn_text">
                                        더 보기
                                    </div>
                                </button>
                            </div>
                        </div>
                        {this.props.isLoggedIn === true ? undefined : doLoginBtn}
                        
                    </div>
                </div>
                <div className="footer">
                    <div className="footer_content">
                        <div className="footer_content_txt">
                            문의메일
                        </div>
                        <div className="footer_content_mail">
                            Summerzet@naver.com
                        </div>
                        <div className="footer_content_legal">
                            <a href="https://www.notion.so/727d24a49df046ba84e42a63f408537d">
                                개인정보 동의 약관
                            </a>
                            <a href="https://www.notion.so/05e1a56e13eb49f29ae614024231333a">
                                파팅 이용약관 
                            </a>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);