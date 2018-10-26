export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const USERS_LOADING = 'USERS_LOADING';
export const ACTION_ERROR_USERS = 'ACTION_ERROR_USERS';

const initStore = {
    loading: false,
    users: [],
    error: "",
}
const UsersReducer = (store = initStore, action) => {
    switch (action.type) {
        case USERS_LOADING:
            return { ...store, loading: action.payload };
        case GET_USERS_SUCCESS:
            return { ...store, users: action.payload };
        case ACTION_ERROR_USERS:
            return { ...store, error: action.payload };
        default:
            return store;
    }
}
export default UsersReducer;