import React, { Component } from 'react'
import './Auth.css'

export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            userI: '',
            passI: ''
        }
    }

    handleLoginCre = ({ value, name }) => {
        this.setState({ [name]: value })
    }

    checkCredentials = ({ userI, passI }) => {
        const username = 'a'
        const password = 'a'
        if (userI === username && passI === password) {
            this.props.submitCredentials()
        }
    }

    render() {
        return (
            <div className="input-container">
                <div className='input-form'>
                    <input
                        placeholder='Username'
                        name='userI'
                        value={this.state.userI}
                        onChange={(e) => this.handleLoginCre(e.target)}
                    />
                    <input
                        placeholder='Password'
                        name='passI'
                        value={this.state.passI}
                        onChange={(e) => this.handleLoginCre(e.target)}
                    />
                    <button onClick={() => this.checkCredentials(this.state)}>Submit</button>
                </div>
            </div>
        )
    }
}