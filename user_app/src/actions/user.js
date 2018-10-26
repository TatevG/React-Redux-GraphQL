import {
    GET_USER_SUCCESS,
    USER_LOADING,
    ACTION_ERROR_USER,
    UPDATE_CITY_SUCCESS,
} from '../reducers/user-reducer';
import axios from 'axios';

const API_URL = "http://localhost:3000/graphql";

function actionError(error) {
    return {
        type: ACTION_ERROR_USER,
        payload: error,
    }
}
function userLoading(data) {
    return {
        type: USER_LOADING,
        payload: data,
    }
}
function getUserSuccess(data) {
    return {
        type: GET_USER_SUCCESS,
        payload: data,
    }
}
function updateCitySuccess(data) {
    return {
        type: UPDATE_CITY_SUCCESS,
        payload: data,
    }
}

export function GetUser(id) {
    return async (dispatch) => {
        try {
            dispatch(userLoading(true));
            const data = await axios.get(`${API_URL}?query={user(id: ${id}){
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
                    'Content-Type': 'application/json',
                }
            })
            dispatch(getUserSuccess(data.data.data.user))
        } catch (error) {
            if (error.response && error.response.data.errors) {
                alert(error.response.data.errors)
                dispatch(actionError(error.response.data.errors));
            }
        } finally {
            dispatch(userLoading(false));
        }
    };
}

export function UpdateCity(userID, city) {
    const mutation = `mutation UpdateUserCity($userID: ID!, $city: String!){
        updateUserCity(userID: $userID, city:$city){
            id 
            name 
            age 
            city 
            knowledge{
                language 
                frameworks
            }
        }
    }`
    return async (dispatch) => {
        try {
            const data = await axios.post(API_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }, {
                    data: {
                        query: mutation,
                        variables: {
                            userID: userID,
                            city: city
                        }
                    }
                })
            dispatch(updateCitySuccess(data.data.data.updateUserCity));
        } catch (error) {
            if (error.response && error.response.data.errors) {
                alert(error.response.data.errors)
                dispatch(actionError(error.response.data.errors));
            }
        }
    }
}