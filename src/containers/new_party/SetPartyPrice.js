/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SetPartyPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partyPrice: {
                leader: 0,
                member: 0
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            partyName: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.setPartyName('partyName', this.state.partyName);
    }
    render() {
        let data = "파티장은 자신이 납부할 금액을 직접 설정할 수 있어요.\n납부할 금액을 입력하면 자동으로\n파티원이 결제할 금액을 계산해드립니다.";
        const addLineBreaks = (data) =>
            data.split('\n').map((text, index) => (
                <React.Fragment key={`${text}-${index}`}>
                {text}
                <br />
                </React.Fragment>
        ));
        return (
            <>
            <hr className='partyName_bar'></hr>
            <div className='newparty_content'>
                <div className='main'>
                    요금 계산은 자동으로
                </div>
                <div className='sub'>
                    {addLineBreaks(data)}
                </div>
            </div>
            <div className='newparty_price'>
                <form className='newparty_price_form' onSubmit={this.handleSubmit}>
                    <div className='group'>
                        <div className="title">
                            파티장
                        </div>
                        <div className='detail'>
                            <TextField
                                className='input_detail' 
                                label='월 이용료를 입력해주세요' 
                                value={this.partyName} 
                                onChange={this.handleChange}/> 
                        </div>
                    </div>
                    <div>
                        <img src={require("../../assets/images/down_arrow.svg")} />
                    </div>
                    <div className='group'>
                        <div className="title_member">
                            파티원
                        </div>
                        <div className='detail'>
                            <TextField
                                className='input_detail' 
                                value={this.partyName} 
                                onChange={this.handleChange}/> 
                        </div>
                    </div>
                    <input className='submit' type='submit' value='다음' disabled={this.state.partyPrice.leader <= 0} />
                </form>
            </div>
            </>
        )
    }
}

export default SetPartyPrice;