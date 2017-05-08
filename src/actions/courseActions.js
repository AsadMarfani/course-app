import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export var createCourse = (course) => {
    return {
        type: types.CREATE_COURSE,
        course
    };
}

var loadCoursesSuccess = (courses) => {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

export var loadCourses = () => {
    return (dispatch) => {
        return courseApi.getAllCourses().then( courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch( error => {
            throw (error);
        })
    };
}

export var updateCourseSuccess = (course) => {
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course
    };
}
export var createCourseSuccess = (course) => {
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course
    };
}

export var saveCourse = (course) => {
    return (dispatch) => {
        return courseApi.saveCourse(course).then(course => {
            course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
        }).catch(error => {
            throw (error);
        })
    }
}