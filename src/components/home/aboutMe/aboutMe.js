import React, { Component } from 'react';
import './../home.css'

class AboutMe extends Component {
    constructor (props) {
        super(props);
    };

    render () {
        return (
            <div class='aboutMeSection' id='aboutMeSection'> 
                <h1 class='aboutMeHeader sectionHeader'>About Me</h1>
                <div class='aboutMeContent'>
                    <img class='profilePicture' src='https://i.ibb.co/Swh64x5/Screen-Shot-2019-08-08-at-7-03-10-PM.png' alt='' />
                    <p class='aboutMeWords'>I got into web development because I love helping people. And, in today's world, the internet touches nearly everyone. Because I want to help make the lives of people everywhere better, I am driven to create websites with that purpose in mind. I am passionate about what I do, and this drives me to create clean, easy to use applications that enrich the lives of those who use them. </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;