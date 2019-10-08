import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import Friend from "./Friend";


export const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log(res)
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <div>
            <h2>Friends List</h2>
            {friends.map(friend => (
                <Friend friend={friend} />
            ))}
        </div>
    );

}