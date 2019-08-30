import React, { Component } from 'react';
import './contact.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class Contact extends Component {
    constructor (props) {
        super (props)

        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.send = this.send.bind( this );
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    send () {
        axios.post('http://localhost:3015/api/sendmail', { name: this.state.name, email: this.state.email, message: this.state.message })
        .then( results => {
            window.alert(results.data)
        })
        .catch( err => {
            window.alert(err)
        })
    }   
    render () {
        return (
            <div className='contactSection'>
                <div className='contactDescription'>
                    <p className='contactDescriptionWords'>Questions? Send me a message! I look forward to hearing from you!</p>
                </div>
                <div className='contactInputs'>
                    <div className='contactInput'><input className='contactInputOnly' onChange={e => this.handleChange(e)} value={this.state.name} name='name' placeholder='Name' /></div>
                    <div className='contactInput'><input className='contactInputOnly' onChange={e => this.handleChange(e)} value={this.state.email} name='email' placeholder='Email' /></div>
                    <div className='contactInput'><textarea className='contactInputOnly' onChange={e => this.handleChange(e)} rows={8} value={this.state.message} name='message' placeholder='Message' /></div>
                    <Button onClick={() => this.send()}>Send message</Button>
                </div>
            </div>
        )
    }
}

export default Contact;