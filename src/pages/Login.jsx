import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Buttons/Button";
import styles from "./Login.module.css"
const Login = ({ loginHandler }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const checkCredentials = (e) => {
        e.preventDefault();
        if (
            username.toLowerCase() === "sneha" &&
            password.toLowerCase() === "test123"
        ) {
            loginHandler();
            navigate("/employees");
        } else {
            alert("Invalid Credentials");
        }
    };


    return (
        <div className={styles.loginformContainer}>
            <form className={styles.loginForm} onSubmit={checkCredentials}>
                <p>Please log in here</p>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                    />
                </div>{" "}
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                    />
                </div>
                <Button text="Log in" type="submit" />
            </form>
        </div>

    );
};

export default Login;