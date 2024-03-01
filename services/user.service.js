import User from "../models/user.model.js";

const login = async ({ username, password }) => {
    console.log(username, password);
    // See if username supplied exists in any user document in the database
    const user = await User.findOne({ username });
    console.log(user);
    // Check that the password supplied matches the stored password for the user
    // document found with the supplied email
    // If email and password match, return user
    if (user && password === user.password) {
        return user;
    }
    // If not, error
    throw new Error();
};

export const userService = {
    login,
};
