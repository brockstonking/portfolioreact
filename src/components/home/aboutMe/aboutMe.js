import React, { Component } from 'react';
import './../home.css'

class AboutMe extends Component {
    constructor (props) {
        super(props);
    };

    render () {
        return (
            <div className='aboutMeSection' id='aboutMeSection'> 
                <div className='colorBlockOne'></div>
                <div className='colorBlockTwo'></div>
                <h1 className='aboutMeHeader sectionHeader'>About Me</h1>
                <div className='aboutMeContent'>
                    <div className='profilePictureContainer'><img class='profilePicture' src='https://i.ibb.co/8smQ4Yn/Linkdin-profile-picture-Cropped.jpg' alt='' /></div>
                    <p className='aboutMeWords'>I got into web development because I love helping people. And, in today's world, the internet touches nearly everyone. Because I want to help make the lives of people everywhere better, I am driven to create websites with that purpose in mind. I am passionate about what I do, and this drives me to create clean, easy to use applications that enrich the lives of those who use them. </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;