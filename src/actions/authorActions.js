import AuthorAPI from '../api/mockAuthorApi';
import * as types from './actionTypes';

export var loadAuthorsSuccess = (authors) => {
    return {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors
    }
}

export var loadAuthors = () => {
    return (dispatch) => {
        return AuthorAPI.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error)
        });
    };
}