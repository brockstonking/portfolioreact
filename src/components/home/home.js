import React, { Component } from 'react';
import './home.css';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from './aboutMe/aboutMe';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Contact from './contact/contact';

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            downArrowMargin: 201,
            downArrowMarginMobile: 67,
            goDown: false,
            goDownMobile: false,
            mobile: true
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

        setInterval(() => {
            const { downArrowMarginMobile, goDownMobile } = this.state;
            if (downArrowMarginMobile === 67) {
                this.setState({
                    goDownMobile: true
                })
            } else if (downArrowMarginMobile === 60) {
                this.setState({
                    goDownMobile: false
                })
            }
            if (!goDownMobile) {
                this.setState({
                    downArrowMarginMobile: downArrowMarginMobile + .5
                })
            } else if (goDownMobile) {
                this.setState({
                    downArrowMarginMobile: downArrowMarginMobile - .5
                })
            }
        }, 15)
        

        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

        
    }

    resize () {
        this.setState({mobile: window.innerWidth <= 760});
    }
    

    render () {
        let downArrowStyling = !this.state.mobile 
        ? {
            width: '100px',
            height: `50px`,
            marginTop: `${this.state.downArrowMargin}px`
        }
        : {
            width: '100px',
            height: `50px`,
            marginTop: `${this.state.downArrowMarginMobile}px`
        }
        let nameStyle = !this.state.mobile 
        ? {
            width: '31%'
        } : {}
        let nameAndDescTitle = !this.state.mobile 
        ? {
            marginTop: '35vh'
        }
        : {
            marginTop: '15vh'
        }
        return (
            <Router>
                <div className='home'>
                    <div className='upperSection' style={ nameAndDescTitle }>
                        <h1 className='portfolioOfName' style={nameStyle}>Brockston King</h1>
                        <p className='portfolioOfDescriptionWords' id='body'>energetic. creative. web developer. reliable. hardworking. me.</p>
                        <img className='pictureBase' src='https://images.unsplash.com/photo-1561679660-1b9e82450a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt='' />
                        <Link to="/pathLink#aboutMeSection"><img style={downArrowStyling} className='downArrow' src='https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png' alt='' /></Link>
                    </div>
                    <div className='aboutMeColors'><AboutMe /></div>
                    <div className='skillsColors'><Skills /></div>
                    <div className='projectsColors'><Projects /></div>
                    <div className='contactColors'><Contact /></div>
                </div>
            </Router>
        )
    }
}

export default Home;