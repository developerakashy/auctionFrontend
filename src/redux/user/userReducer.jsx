import { FETCH_USER_AUTH_FAILURE, FETCH_USER_AUTH_REQUEST, FETCH_USER_AUTH_SUCCESS } from "./userTypes"

const initialState = {
    loader: true,
    userInfo: null,
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_AUTH_REQUEST: return {
            ...initialState,
            loader: true
        }

        case FETCH_USER_AUTH_SUCCESS: return {
            loader: false,
            userInfo: action.payload,
            error: ''
        }

        case FETCH_USER_AUTH_FAILURE: return {
            loader: false,
            userInfo: null,
            error: action.payload
        }

        default: return state
    }
}

export default userReducer
