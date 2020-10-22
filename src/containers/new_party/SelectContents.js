import React, { Component } from 'react';

class SelectContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.selectContents('contents', e.target.name);
    }
    render() {
        return (
            <>
            <hr className='partyContents_bar'></hr>
            <div className='newparty_content'>
                <div className='main'>
                    컨텐츠 선택하기
                </div>
                <div className='sub'>
                    어떤 컨텐츠로 파티를 생성하고 싶으신가요?
                </div>
            </div>
            <div className="logo_group">
                <div className="logos">
                    <div>
                        <input className="btn_netflix" type='button' name='netflix' onClick={this.handleClick} />
                    </div>
                    <div>
                    <div>
                        <input className="btn_wave" type='button' name='wave' onClick={this.handleClick} />
                    </div>
                    </div>
                    <div>
                        <input className="btn_watcha" type='button' name='watcha' onClick={this.handleClick} />
                    </div>
                    <div>
                        <input className="btn_apple" type='button' name='apple' onClick={this.handleClick} />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default SelectContent;