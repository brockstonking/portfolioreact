import React, { Component } from 'react';
import './home.css';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from './aboutMe/aboutMe';
import Skills from './skills/skills';
import Projects from './projects/projects';

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            downArrowMargin: 201,
            goDown: false
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            const { downArrowMargin, goDown } = this.state;
            if (downArrowMargin === 207) {
                this.setState({
                    goDown: true
                })
            } else if (downArrowMargin === 200) {
                this.setState({
                    goDown: false
                })
            }
            if (!goDown) {
                this.setState({
                    downArrowMargin: downArrowMargin + .5
                })
            } else if (goDown) {
                this.setState({
                    downArrowMargin: downArrowMargin - .5
                })
            }
        }, 15)
    }
    

    render () {
        let downArrowStyling = {
            width: '100px',
            height: `50px`,
            marginTop: `${this.state.downArrowMargin}px`
        }
        return (
            <Router>
                <div class='home'>
                    <div class='upperSection'>
                        <h1 class='portfolioOfName'>Brockston King</h1>
                        <p class='portfolioOfDescriptionWords' id='body'>energetic. creative. web developer. reliable. hardworking. me.</p>
                        <img class='pictureBase' src='https://images.unsplash.com/photo-1561679660-1b9e82450a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt='' />
                        <Link to="/pathLink#aboutMeSection"><img style={downArrowStyling} class='downArrow' src='https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png' alt='' /></Link>
                    </div>
                    <AboutMe />
                    <Skills />
                    <Projects />
                </div>
            </Router>
        )
    }
}

export default Home;