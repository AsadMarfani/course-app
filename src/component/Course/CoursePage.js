import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CourseList from './CourseList';

class CoursePage extends Component {
    constructor(props){
        super(props);
        this.courseRow = this.courseRow.bind(this);
    }
    courseRow(course, index) {    
            return <div key = {index}>{course.title}</div>
        }
    render() {
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses = {this.props.courses}></CourseList>               
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursePage)