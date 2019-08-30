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
                    <div className='linkedinGithubDiv'>
                        <a href='https://www.linkedin.com/in/brockston-king-aa2437186/'><img className='linkedinLogo linkedGithubLogos' src='https://www.sccpre.cat/mypng/detail/511-5114464_linkedin-logo-png-official-logo-white-linkedin-icon.png' alt='' /></a>
                        <a href='https://github.com/brockstonking'><img className='githubLogo linkedGithubLogos' src='data:image/png;base64,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' alt='' /></a>
                    </div>
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