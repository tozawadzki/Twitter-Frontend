import axios from "axios";

export const IsUserSignedIn = () => {
    let jwtToken = localStorage.getItem("JWT");
    if (jwtToken !== undefined && jwtToken !== null) {
        return true;
    }
    else {
        return false;
    }
}
export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return true;
    }
    delete axios.defaults.headers.common['Authorization'];
}