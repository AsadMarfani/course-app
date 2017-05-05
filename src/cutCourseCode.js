
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux'

        this.state = {
            course: {title : ''}
        };

        this.onSubForm = this.onSubForm.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course
        })

    }
    onSubForm(event){
        event.preventDefault();
        // console.log(this.state.course)
        this.props.actions.createCourse(this.state.course);
    }


<h2>Add Course</h2>
                <form onSubmit = {this.onSubForm}>
                    <input type="text"
                        onChange = {this.onTitleChange}
                        value = {this.state.course.title}
                    />
                    <button type = "submit" className = "btn btn-primary btn-md">Save</button>    
                </form> 


function mapDispatchToProps(dispatch, ownProps){
    return {
        actions: bindActionCreators(courseActions, dispatch)        
    }
}