import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div class='home'>
                <div class='upperSection'>
                    <h1 class='portfolioOfName'>Brockston King</h1>
                    <p class='portfolioOfDescriptionWords' id='body'>energetic. creative. web developer. reliable. hardworking. me.</p>
                    <img class='pictureBase' src='https://images.unsplash.com/photo-1561679660-1b9e82450a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt='' />
                </div>
                <div class='aboutMeSection'>
                    <h1 class='aboutMeHeader'>About Me</h1>
                    <div class='aboutMeContent'>
                        <img class='profilePicture' src='https://i.ibb.co/Swh64x5/Screen-Shot-2019-08-08-at-7-03-10-PM.png' alt='' />
                        <p class='aboutMeWords'>I got into web development because I love helping people. And, in today's world, the internet touches nearly everyone. Because I want to help make the lives of people everywhere better, I am driven to create websites with that purpose in mind. I am passionate about what I do, and this drives me to create clean, easy to use applications that enrich the lives of those who use them. </p>
                    </div>
                </div>
                <div class='skillsSection'>
                    <div class='skillsBlock'>
                        <div class='skillAndTitle'>
                            <img class='skillImage skillImageRound' src='https://banner2.kisspng.com/20180410/qgw/kisspng-node-js-javascript-database-mongodb-native-5acd4ebf6b4b75.3634484415234044794395.jpg' alt='' />
                            <p class='skillTitle'>Node</p>
                        </div>
                        <div class='skillAndTitle'>
                            <img class='skillImage' src='https://cdn.glitch.com/project-avatar/fa1f1a9a-054c-42b2-93ab-83ec4f40695d.png' alt='' />
                            <p class='skillTitle'>Express</p>
                        </div>
                        <div class='skillAndTitle'>
                            <img class='skillImage' src='https://sap.github.io/ui5-webcomponents/images/react.svg' alt='' />
                            <p class='skillTitle'>React</p>
                        </div> 
                        <div class='skillAndTitle'>
                            <img class='skillImage' src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' alt='' />
                            <p class='skillTitle'>Redux</p>
                        </div> 
                        <div class='skillAndTitle'>
                            <img class='skillImage' src='http://pluspng.com/img-png/logo-javascript-png-javascript-tutorials-400.png' alt='' />
                            <p class='skillTitle'>JavaScript</p>
                        </div>
                        <div class='skillAndTitle'>
                            <img class='skillImage' src='https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png' alt='' />
                            <p class='skillTitle'>HTML5</p>
                        </div>
                        <div class='skillAndTitle'>
                            <img class='skillImage' src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png' alt='' />
                            <p class='skillTitle'>CSS3</p>
                        </div>
                        <div class='skillAndTitle'>
                            <img class='skillImage' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png' alt='' />
                            <p class='skillTitle'>PostgresQL</p>
                        </div>      
                    </div> 
                </div>              
            </div>
        )
    }
}

export default Home;