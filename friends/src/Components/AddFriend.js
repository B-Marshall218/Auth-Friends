import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

export const AddFriend = (props) => {
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();


        axiosWithAuth()
            .post("/friends", friend)
            .then(res => {
                console.log("AddFriend.js:", res)
                setFriend({
                    name: "",
                    age: "",
                    email: ""
                });
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <div>
            <form onSubmit={AddFriend}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={friend.name}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={friend.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={friend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
        </div>
    );
}      