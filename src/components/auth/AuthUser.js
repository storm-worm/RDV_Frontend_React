import axios from "axios";
import { useNavigate, useHistory } from "react-router-dom";
import { useState } from "react";

export default function AuthUser() {

    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken;
    };

    const getUser = () => {
        const userString = sessionStorage.getItem("user");
        const user_detail = JSON.parse(userString);
        return user_detail;
    };

    const [user, setUser] = useState(getToken());
    const [token, setToken] = useState(getUser());

    const saveToken = (user,token)=>{
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("token", JSON.stringify(token));
        setUser(user);
        setToken(token);
        navigate("/");

    }

    const logout = () => {
        sessionStorage.setItem("user", null);
        sessionStorage.setItem("token", null);
        setToken(null);
        setUser(null);
        sessionStorage.setItem('loggedIn', false);
        navigate("/");
    }

    const handleError = (error) => {
        if (error.response.status === 401) {
          setError( 'Authentication failed');
        } else {
          setError( 'An error occurred' );
        }
      };

    const http = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + getToken()
        },
    });



    return {
        setToken: saveToken,
        user,
        token,
        http,
        getToken,
        getUser,
        logout, 
        profile: getUser(),
        handleError,
        error, setError
    }

}