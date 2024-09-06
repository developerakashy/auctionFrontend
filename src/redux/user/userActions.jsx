import { FETCH_USER_AUTH_FAILURE, FETCH_USER_AUTH_SUCCESS, FETCH_USER_AUTH_REQUEST } from "./userTypes";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_AUTH_REQUEST
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_AUTH_SUCCESS,
        payload: user
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_AUTH_FAILURE,
        payload: error
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())

        fetch('http://localhost:8000/user/checkAuth', {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => response.json())
        .then((data) => {
            if(data.status === 'successfull'){
                setTimeout(() => dispatch(fetchUserSuccess(data.user)), 500)


            }else{
                setTimeout(() => dispatch(fetchUserFailure(data.error)), 500)
            }
        }).catch((e) => {
            // console.log(e)

            setTimeout(() => dispatch(fetchUserFailure(`server not working. Try afer sometime's`)), 500)
        })
    }
}
