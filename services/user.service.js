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

const signup = async ({ username, password }) => {
    // Check if username already exists
    const user = await User.findOne({ username });
    // If username already exists, error
    if (user) {
        throw new Error();
    }
    // If username doesn't exist, create a new user document
    const newUser = new User({ username, password });
    // Save the new user document to the database
    await newUser.save();
    // Return the new user document
    return newUser;
}

const changepassword = async ({ username, oldpassword, newpassword }) => {
    // Check if username already exists
    const user = await User.findOne({ username });
    if (user && oldpassword === user.password) {
        user.password = newpassword;
        await user.save();
        return user;
    }
    throw new Error();
} 


export const userService = {
    login, signup, changepassword
};
