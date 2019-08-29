import React, { Component } from 'react';
import SingleProject from './singleProject/singleProject';
import './../home.css';
import Button from 'react-bootstrap/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

class Projects extends Component {
    constructor (props) {
        super(props);

        this.state = {
            projectId: 0
        }
    };

    render () {
        const goForward = () => {
            if (this.state.projectId === projects.length - 1) {
                this.setState({
                    projectId: 0
                });
            } else {
                this.setState({
                    projectId: this.state.projectId + 1
                });
            };
        };
        const goBackward = () => {
            if (this.state.projectId === 0) {
                this.setState({
                    projectId: projects.length - 1
                });
            } else {
                this.setState({
                    projectId: this.state.projectId - 1
                });
            };
        };
        let projects = [
            {
                img: 'https://i.ibb.co/k36SLTS/Screen-Shot-2019-08-08-at-3-25-09-PM.png',
                title: 'ReviewMe',
                developed: 'Personally developed',
                technologies: 'Created with Express, React, Massive, Axios, Redux, React-Chartkick, Twilio',
                description: 'ReviewMe is a user-interactive site that enables business owners to send a text message to a clients cellphone that contains prompts for the client to leave a review. By first asking clients if their experience was generally positive or negative, clients more likely to leave a positive review are routed to the business’s google listing, while others are sent to a private feedback form that can only be viewed by the business owner themselves',
                link: 'https://myfirstapplicationbking.herokuapp.com/'
            },
            {
                img: 'https://i.ibb.co/JK9FLFc/Screen-Shot-2019-08-22-at-1-38-37-PM.png',
                title: 'QUICK-BITE',
                developed: 'Team developed',
                technologies: 'Created with Express, React, Massive, Axios, Redux, Material-UI, google-maps-react, Thunk',
                description: 'QUICK-BITE is an geolocation-based site that provides a user with a list of restaurants near them ranked by parameters such as price, distance, and overall rating. Users can save favorites and leave comments on favorited restaurants. These comments are visible to all users.',
                link: 'https://quick-bite-won5g2.herokuapp.com/'
            }
        ];
        return (
            <div className='projectsSection'>
                <h1 className='sectionHeader'>Projects</h1>
                <div className='projectsSingleAndButtons'>
                    <div className='projectsButton' onClick={ () => goForward() }><Button><ChevronLeftIcon /></Button></div>
                        <SingleProject 
                            img={projects[this.state.projectId].img} 
                            title={projects[this.state.projectId].title} 
                            developed={projects[this.state.projectId].developed}
                            technologies={projects[this.state.projectId].technologies}
                            description={projects[this.state.projectId].description} 
                            link={projects[this.state.projectId].link} 
                        />
                    <div className='projectsButton' onClick={ () => goBackward() }><Button><ChevronRightIcon /></Button></div>
                </div>
            </div>
        )
    }
}

export default Projects;