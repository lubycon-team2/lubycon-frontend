/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/*eslint-disable-next-line*/
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SetPartyName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partyName: '',
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
        let data = "어떤 파티를 만들어 갈 것인지\n파티원들에게 홍보해주세요.";
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
                    파티명으로 차별화하기
                </div>
                <div className='sub'>
                    {addLineBreaks(data)}
                </div>
            </div>
            <div className='newparty_name'>
                <form className='newparty_name_form' onSubmit={this.handleSubmit}>
                    <div className="title">
                        파티명
                    </div>
                    <div className='detail'>
                        {this.state.partyName.length > 0 && this.state.partyName.length < 10  ? <TextField
                                                                error
                                                                className='input_detail' 
                                                                type='text' 
                                                                label='파티의 특징을 적어주세요' 
                                                                helperText='10자 이상 적어주세요'
                                                                value={this.partyName} 
                                                                onChange={this.handleChange}/> :
                                                            <TextField 
                                                                className='input_detail' 
                                                                type='text' 
                                                                label='파티의 특징을 적어주세요' 
                                                                value={this.partyName} 
                                                                onChange={this.handleChange}/>}
                        <input className='submit' type='submit' value='다음' disabled={this.state.partyName.length < 10} />
                    </div>
                </form>
            </div>
            </>
        )
    }
}

export default SetPartyName;