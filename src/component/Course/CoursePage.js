import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';


class CoursePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            course: {title : ''}
        };

        this.onSubForm = this.onSubForm.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.courseRow = this.courseRow.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course
        })

    }
    onSubForm(event){
        event.preventDefault();
        console.log(this.state.course)
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }
    courseRow(idx, course) {    
            return <div key = {idx}>{course.title}</div>
        }
    render() {
   //     console.log(this.props.courses)
        return(
            <div>
                <h1>Courses</h1>
                {console.log(this.props.courses)}
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <form onSubmit = {this.onSubForm}>
                    <input type="text"
                        onChange = {this.onTitleChange}
                        value = {this.state.course.title}
                    />
                    <button type = "submit" className = "btn btn-primary btn-md">Save</button>    
                </form>                
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursePage)