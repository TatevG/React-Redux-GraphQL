import {
    GET_USERS_SUCCESS,
    USERS_LOADING,
    ACTION_ERROR_USERS,
} from '../reducers/users-reducer';
import axios from 'axios';

const API_URL = "http://localhost:3000/graphql";

function actionError(error) {
    return {
        type: ACTION_ERROR_USERS,
        payload: error,
    }
}
function usersLoading(data) {
    return {
        type: USERS_LOADING,
        payload: data,
    }
}
function getAllUsersSuccess(data) {
    return {
        type: GET_USERS_SUCCESS,
        payload: data,
    }
}

export function GetUsers() {
    return async (dispatch) => {
        try {
            dispatch(usersLoading(true));
            const data = await axios.get(`${API_URL}?query={allUsers{
                id
                name
                age
                city
                knowledge{
                    language
                    frameworks
                }
            }
        }`, {
                headers: {
                        'Content-Type': 'application/json'
                    }
                })
            dispatch(getAllUsersSuccess(data.data.data.allUsers))
        } catch (error) {
            if (error.response && error.response.data.errors) {
                alert(error.response.data.errors)
                dispatch(actionError(error.response.data.errors));
            }
        } finally {
            dispatch(usersLoading(false));
        }
    };
}
