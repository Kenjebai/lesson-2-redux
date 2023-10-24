import { types } from "./types";

export function changeTitleAction() {
    return {
        type: types.HANDLE_CHANGE
    }
}

export function asyncFunctionAction() {
    return function (dispatch) {
        setTimeout(() => {
            alert("hello")
        }, 2000)
    }
}

function getUsersAction(users) {
    return {
        type: types.USERS,
        payload: users
    }
}

function getDataAction (data1){
    return{
        type: types.DATA,
        payload: data1
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await reponse.json()
        dispatch(getUsersAction(data))
    }
}

export function fetchUserOneInfo(id) {
    return async function (dispatch) {
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await reponse.json()
        dispatch(getDataAction(data))
    }
}
