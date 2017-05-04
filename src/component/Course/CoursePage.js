import React, { Component, PropTypes } from 'react'

class CoursePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            course: {title : ''}
        };

        this.onSubForm = this.onSubForm.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
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
        alert(`Saving ${this.state.course.title}`);
    }
    render() {
        return(
            <div>
                <h1>Courses</h1>
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

export default CoursePage