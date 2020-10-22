import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 179,
        }
        this.timeFormat = this.timeFormat.bind(this);
    }

    componentDidMount() {
        if(this.state.time > 0) {
            const counter = setInterval(() => this.setState({time: this.state.time - 1}), 1000)
            return () => clearInterval(counter);
        } 
        // if(localStorage.getItem('timer') > 0) {
        //     const counter = setInterval(() => localStorage.setItem('timer', localStorage.getItem('timer') - 1), 1000)
        //     return () => clearInterval(counter);
        // } 

    }

    componentDidUpdate(prevState) {
        if(prevState.time !== this.state.time && this.state.time < 0) {
            this.setState({time: 0})
            console.log('d')
            return false;
        }
        
    }

    timeFormat(time) {
        const m = Math.floor(time / 60).toString();
        let s = (time % 60).toString();
        if (s.length === 1) {
            s = `0${s}`
        }
        return `${m}:${s}`;
    }

    render() {
        return (
            <>
                <p  className='timer'>
                    {this.timeFormat(this.state.time)}
                </p>
            </>
        )
    }
}

export default Timer;