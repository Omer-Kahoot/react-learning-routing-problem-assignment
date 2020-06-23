import React, { Component } from 'react';
import './Course.css';

class Course extends Component {

    componentDidMount(){
        console.log(this.props);
    }

    render () {
        const urlParams = new URLSearchParams(this.props.location.search);
        const courseTitle = urlParams.get('course-title');
        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;