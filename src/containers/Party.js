/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

class Party extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    componentDidMount() {
        if (this.props.status.isLoggedIn === false) {
            console.log(this.props.status.isLoggedIn);
            browserHistory.push('/login');
        }
    };
    render() {
        return (
            <div className='myparty'>
                <div className="profile">
                    <div className='profile_img'>
                        <img src={require('../assets/images/logo192.png')} style={{width:'43px', height:'43px'}}/>
                    </div>
                    <div className='profile_info'>
                        <button className='name'>
                            차한슬
                            <img src={require('../assets/images/right_arrow.svg')} />
                        </button>
                        <div className='email'>
                            summerzet8@naver.com
                        </div>
                    </div>
                    <div className='profile_start'>
                        <Link to='party/new'>
                            <button className='make_party'>
                                파티 모집하기
                            </button>
                        </Link>
                    </div>
                </div>
                <hr className='hr'></hr>
                <div className='party_list'>
                    <div className='party_kinds'>
                        <a className='current_party' href='/'>
                            현재 파티
                        </a>
                        <div className='vl'></div>
                        <a className='end_party' href='#'>
                            종료된 파티
                        </a>
                    </div>
                </div>
                <div className='party_list_detail'>
                    <div className='party_list_detail_g'>
                        <div className='detail_txt'>
                            아직 참여한 파티가 없어요!
                        </div>
                        <div className='detail_img'>
                            <img src={require('../assets/images/no_party.svg')} />
                        </div>
                    </div>
                </div>
                <hr className='hr'></hr>
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
        );
    };
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

export default connect(mapStateToProps, mapDispatchToProps)(Party);