import React, { Component } from 'react';
import { SelectContents, SetPartyName, SetPartyPrice } from '.';
import ClearIcon from '@material-ui/icons/Clear';

class NewParty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: '',
            partyName: '',
            partyPrice: {
                leader: 0,
                member: 0
            },
            partyTerm: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(stateName, name) {
        this.setState({
            [stateName]: name
        }, ()=> console.log(this.state));

    }

    render() {
        return (
            <div className='newparty'>
                <div className='newparty_header'>
                    <div className='newparty_header_text'>
                        파티 생성하기
                    </div>
                </div>
                <hr className='hr'></hr>
                <button className='x-icon'>
                    <ClearIcon />
                </button>
                {!this.state.contents ? <SelectContents selectContents={this.handleClick} /> : undefined }
                {this.state.contents && !this.state.partyName ? <SetPartyName setPartyName={this.handleClick} /> : undefined}
                {this.state.partyName && this.state.partyPrice.leader === 0 ? <SetPartyPrice setPartyPrice={this.handleClick} /> : undefined}
            </div>
        );
    }
}

export default NewParty;