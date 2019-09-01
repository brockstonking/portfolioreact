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
            message: '',
            showSent: false,
            showSendError: false
        }
        this.send = this.send.bind( this );
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    send () {
        const { name, email, message } = this.state;
        if (name && email && message) {
            this.setState({
                name: '',
                email: '',
                message: ''
            })
            axios.post('http://localhost:3015/api/sendmail', { sender: this.state.name, email: this.state.email, message: this.state.message })
            .then( results => {
                this.setState({
                    showSent: true
                })
                setTimeout(() => {
                    this.setState({
                        showSent: false
                    })
                }, 3000)
            })
            .catch( err => {
                this.setState({
                    showSendError: true
                })
                setTimeout(() => {
                    this.setState({
                        showSendError: false
                    })
                }, 4000)
            })
        } else {
            window.alert('Please fill out all fields before sending')
        }
    }   
    render () {
        const sentAlert = this.state.showSent 
        ? <div className='sentAlertBox'>
            <p>Email sent!</p>
        </div>
        : <div></div>
        const errorAlert = this.state.showSendError 
        ? <div className='errorAlertBox'>
            <p>Sorry, we couldn't send your message</p>
        </div>
        : <div></div>
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
                { sentAlert }
                { errorAlert }
            </div>
        )
    }
}

export default Contact;