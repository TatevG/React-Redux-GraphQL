export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const USER_LOADING = 'USER_LOADING';
export const ACTION_ERROR_USER = 'ACTION_ERROR_USER';
export const UPDATE_CITY_SUCCESS = 'UPDATE_CITY_SUCCESS'

const initStore = {
    loading: false,
    user: {},
    error: "",
}
const UserReducer = (store = initStore, action) => {
    switch (action.type) {
        case USER_LOADING:
            return { ...store, loading: action.payload };
        case GET_USER_SUCCESS:
            return { ...store, user: action.payload };
        case ACTION_ERROR_USER:
            return { ...store, error: action.payload };
        case UPDATE_CITY_SUCCESS:
            return { ...store, user: action.payload};
        default:
            return store;
    }
}
export default UserReducer;