import React, { Component } from 'react';
import './singleProject.css'

class SingleProject extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className='singleProjectParent'>
                <img className='singeProjectImg' src={ this.props.img } alt='' />
                <div className='singleProjectText'>
                    <h3 className='singleProjectTitle' ><strong>{ this.props.title }</strong></h3>
                    <p className='singleProjectDeveloped'>{ this.props.developed }</p>
                    <p className='singleProjectTechnologies'>{ this.props.technologies }</p>
                    <p className='singleProjectDescription'>{ this.props.description }</p>
                    <a className='singleProjectLink'  href={ this.props.link }>Take a look here</a>
                </div>
            </div>
        )
    }
}

export default SingleProject;