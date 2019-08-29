import React, { Component } from 'react';

class Skills extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div class='skillsSection'>
                <h1 class='sectionHeader'>Skills</h1>
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
        )
    }
}

export default Skills;