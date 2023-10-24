import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/actions";
import User from "../../components/User";

function UsersPage() {
    const dispatch = useDispatch()
    let users = useSelector(state => state.usersReducer.users)
    let data1 = useSelector(state => state.dataReducer.data1)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    console.log(users)

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User userInfo={user} userData={data1} />)}
        </div>
    )
}

export default UsersPage;