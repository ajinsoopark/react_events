import React, { Component } from 'react';

class Clicker extends Component {
    constructor () {
        super ()
        this.state = {
            points: 0,
            rate: 10,
            speed: 0,
            strength: 0,
            zenkai: 0
        }
    }

    incrementClickCount = () => {
        this.setState({
            points: this.state.points + this.state.rate
        })
    }

    gainSpeed = () => {
        let { points, rate, speed } = this.state;

        if (points >= 100) {
            this.setState({
                rate: rate + 10,
                points: points - 100,
                speed: speed + 1
            })
        }
    }

    gainStrength = () => {
        let { points, rate, strength } = this.state;

        if (points >= 1000) {
            this.setState({
                rate: rate + 100,
                points: points - 1000,
                strength: strength + 1
            })
        }
    }

    zenkaiFight = () => {
        let { zenkai, points, rate } = this.state;

        if (points > 9000) {
            this.setState({
                rate: rate + rate,
                zenkai: zenkai + 1,
                points: Math.floor(points - (points * .90))
            })
        }
    }

    render () {
        const { points, speed, strength, zenkai } = this.state;
        
        return (
            <React.Fragment>
            <div className='clicker'>
                <h2>Saiyan Points: { points }</h2>
                <button onClick={ this.incrementClickCount }>POWER UP</button>
            </div>
            
            <div className='speed'>
                <h3>Gain speed and agility with a fight!</h3>
                <button onClick={ this.gainSpeed }>Speed And Agility</button>
                <ul>
                    <li>Level: { speed }</li>
                    <li>Cost: 100 points</li>
                    <li>Rate Increase: 10 point</li>
                </ul>
            </div>
            <div className='strength'>
                <h3>Lift planets and gain strength!</h3>
                <button onClick={ this.gainStrength }>Strength</button>
                <ul>
                    <li>Level: { strength }</li>
                    <li>Cost: 1000 points</li>
                    <li>Rate Increase: 100 points</li>
                </ul>
            </div>
            <div className='zenkai'>
                <h3>Get into a near death fight and recover even stronger(Over 9000 only!)</h3>
                <button onClick={ this.zenkaiFight }>Zenkai</button>
                <ul>
                    <li>Zenkais: { zenkai }</li>
                    <li>Cost: 90% of points</li>
                    <li>Rate Increase: 100%</li>
                </ul>
            </div>
            </React.Fragment>
        )
    }

}

export default Clicker;