import React from 'react';
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';


const CourseForm = ({course, allAuthors, onChange, onSave, loading, errors}) => {
    return(
        <form className = "form-horizontal">
            <TextInput
                name = "title"
                label = "Title"
                value = {course.title}
                error = {errors.title}
                onChange = {onChange}
                placeholder = "Title"
            />
            <SelectInput
                name = "authorId"
                label = "Author"
                value = {course.authorId}
                defaultOption = "Select Author"
                options = {allAuthors}
                onChange = {onChange}
                error = {errors.authorId}
            />
            <TextInput
                name = "category"
                label = "Category"
                value = {course.category}
                error = {errors.category}
                onChange = {onChange}
                placeholder = "Category"
                />
            <TextInput
                name = "length"
                label = "Length"
                value = {course.length}
                error = {errors.length}
                onChange = {onChange}
                placeholder = "Length"
            />
            <input type="submit"
                className = "btn btn-md btn-primary"
                value = {loading ? 'Saving...' : 'Save Course'}
                disabled = {loading}
                onClick = {onSave}
            />
        </form>
    )
}

export default CourseForm