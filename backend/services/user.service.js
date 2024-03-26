import User from "../models/user.model.js";

const login = async ({ username, password }) => {
    // See if username supplied exists in any user document in the database
    const user = await User.findOne({ username });
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
    const user = await User.findOne({ username });
    if (user && oldpassword === user.password) {
        user.password = newpassword;
        await user.save();
        return user;
    }
    throw new Error();
} 

const getfavourites = async ({ username, password }) => {
    const user = await User.findOne({ username });
    if (user && password === user.password) {
        return user.favourites;
    }
    throw new Error();
}

const addfavourite = async ({ username, password, newfavourite }) => {
    const user = await User.findOne({ username });
    if (user && password === user.password) {
        if (!user.favourites.includes(newfavourite) && newfavourite !== "") {
            user.favourites.push(newfavourite);
            await user.save();
            return user.favourites;
        }
    }
    throw new Error();
}

const removefavourite = async ({ username, password, removefavourite }) => {
    const user = await User.findOne({ username });
    if (user && password === user.password) {
        if (user.favourites.includes(removefavourite)) {
            user.favourites = user.favourites.filter(favourite => favourite !== removefavourite);
            await user.save();
            return user.favourites;
        }
        throw new Error();
    }
    throw new Error();
}


export const userService = {
    login, signup, changepassword, getfavourites, addfavourite, removefavourite
};
