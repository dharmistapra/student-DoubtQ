export const handleTokenErrors = (error) => {

    if (error.response.data.error === "Please enter correct Token!" || error.response.data.error === "Invalid refresh token!") {
        localStorage.removeItem("token");
        window.location.href = "/signin";
    }
};
