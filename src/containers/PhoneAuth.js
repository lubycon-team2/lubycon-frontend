import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    handleChange(e) {
        let phoneNum = e.target.value;

        if (phoneNum.length > 11) {
            e.target.value = phoneNum.toString().substr(0, 11);
        } else if (phoneNum.length === 11) {
            this.setState({
                phoneNum: e.target.value,
            })
        }
    }

    handleSubmit(e) {
        console.log(this.props.accessToken);
        e.preventDefault();
    }

    render() {
        return (
            <div className='phone_auth'>
                <form className='phone_auth_form' onSubmit={this.handleSubmit}>
                    <div className='phone_auth_form_num'>
                        <label>
                            <input className='phone' type="tel" placeholder='-없이 숫자만 입력' value={this.phoneNum} onChange={this.handleChange} />
                        </label>
                        <input className='submit' type="submit" value="인증번호받기" disabled={this.state.phoneNum.length !== 11} />
                    </div>
                    <div className='phone_auth_form_auth'>
                        <label>
                            <input className='authnum' type="number" placeholder='인증번호 입력' value={this.authNum} />
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.authentication.status.accessToken,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneAuth);