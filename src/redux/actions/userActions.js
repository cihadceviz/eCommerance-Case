const sucsesslogin = (payload) =>({
    type: "SUCSESS_LOGIN",
    payload,
});

const logout = () =>({
    type: "LOGOUT",
});

export {sucsesslogin, logout};