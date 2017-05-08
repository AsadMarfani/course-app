import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm'

class ManageCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        }
        this.updateCourseState = this.updateCourseState.bind(this);
    }

    updateCourseState(event) {
        let field = event.target.name;
        let course  = this.state.course;
        course[field] = event.target.value;
        return this.setState({
            course: course
        });
    }
    render() {
        return(
            <div>
            <h1>Manage Course</h1>
                <CourseForm
                    allAuthors = {this.props.authors}
                    course = {this.state.course}
                    errors = {this.state.errors}
                    onChange = {this.updateStatus}
                 />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let course = {id: '', title: '', watchHref: '', authorId: '', length: '', category: ''}
    let authorFormattedData = state.authors.map( author => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        } 
    });
    return {
        course: state.course,
        authors: authorFormattedData
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(courseActions,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse)


