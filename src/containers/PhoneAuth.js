import React, { Component } from 'react';
import { connect } from 'react-redux';
import { phoneAuthRequest } from 'src/actions/authentication';
import { Timer } from '.';

class PhoneAuth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNum: '',
            authNum: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        localStorage.setItem('timer', 179);
    }

    handleChange(e) {
        if (e.target.className === 'phone') {
            let phoneNum = e.target.value;
            if (phoneNum.length > 11) {
                console.log(this.props.accessToken)
                e.target.value = phoneNum.toString().substr(0, 11);
            } else {
                this.setState({
                    phoneNum: e.target.value,
                })
            }
        } else if (e.target.className === 'authnum') {
            let authNum = e.target.value;
            if (authNum.length > 6)  {
                e.target.value = authNum.toString().substr(0, 6);
            } else {
                this.setState({ 
                    authNum: e.target.value,
                })
            }
        }
    }

    handleSubmit(e) {
        const className = e.target.className;
        if (className === 'phone_auth_form') {
            this.props.phoneAuthRequest(this.props.accessToken, this.state.phoneNum)
                .then(() => {
                    localStorage.setItem('isPhoneAuth', 'WAITING');
                })
        } else if (className === 'phone_auth_form_auth') {
            console.log('done')
            this.props.phoneAuthRequest(this.props.accessToken, this.state.phoneNum)
                .then(() => {
                    localStorage.setItem('isPhoneAuth', 'SUCCESS');
                });
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className='phone_auth'>
                <form className='phone_auth_form' onSubmit={this.handleSubmit}>
                    <div className='phone_auth_form_num'>
                        <label>
                            <input className='phone' type='tel' placeholder='-없이 숫자만 입력' value={this.phoneNum} onChange={this.handleChange} />
                        </label>
                        <input className='submit' type='submit' value='인증번호받기' disabled={this.state.phoneNum.length !== 11} />
                    </div>
                </form>
                <form className='phone_auth_form_auth' onSubmit={this.handleSubmit}>
                    <div className='phone_auth_form_auth_num'>
                        <label>
                            <input className='authnum' type='number' placeholder='인증번호 입력' value={this.authNum} onChange={this.handleChange}/>
                        </label>
                        {localStorage.getItem('isPhoneAuth') === 'WAITING' ? <Timer /> : undefined }
                        <input className='submit' type='submit' value='확인' disabled={this.state.authNum.length !== 6} />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.authentication.status.accessToken,
        phoneVerified: state.authentication.status.phoneVerified,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        phoneAuthRequest: (accessToken, phoneNum) => {
            return dispatch(phoneAuthRequest(accessToken, phoneNum));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneAuth);