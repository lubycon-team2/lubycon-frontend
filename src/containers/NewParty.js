/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

class NewParty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        
    }
    componentDidMount() {
        
        // if (this.props.status.isLoggedIn === false) {
        //     console.log(this.props.status.isLoggedIn);
        //     browserHistory.push('/login');
        // }
    };
    render() {
        return (
            <div className='phone_auth'>
                {/* <div>
                    <div className="main_header">
                        <Link to="/" className="nav"><div>Partying</div></Link>
                    </div>
                </div> */}
                <form className='phone_auth_form'>
                    <div className='phone_auth_form_num'>
                        <label>
                            <input className='phone' type="tel" placeholder='-없이 숫자만 입력' value={this.inputValue} />
                        </label>
                        <input className='submit' type="submit" value="인증번호받기" />
                    </div>
                    <div className='phone_auth_form_auth'>
                        <label>
                            <input className='authnum' type="number" placeholder='인증번호 입력' value={this.inputValue} />
                        </label>
                    </div>
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewParty);