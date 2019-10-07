import React from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
                // What is the purpose of target above?
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", this.state.credentials)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login 