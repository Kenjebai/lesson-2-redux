import React from "react";
import { useDispatch } from "react-redux";
import { fetchUserOneInfo } from "../redux/actions";

function User({userInfo, userData}) {

    const dispatch = useDispatch()
    const getOneUser = (event) => {
        dispatch(fetchUserOneInfo(event.target.value))
    }
    return (
        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            <button value={userInfo.id} onClick={getOneUser}>get more</button>
            {userInfo.id === userData.id ?
            <>
             <li>id: {userData.id}</li>
             <li>phone: {userData.phone}</li> 
             <li>website: {userData.website}</li>
             <li>username: {userData.username}</li>
            </>
             : ""}
        </ul>
    )
}

export default User