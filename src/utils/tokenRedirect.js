export const requireToken = props => {
    let token = localStorage.getItem("jwtToken");
    if (!token) {
        props.history.push("/");
    }
};
