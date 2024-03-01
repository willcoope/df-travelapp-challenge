import { userService } from "../services/user.service.js";

export const loginController = async (req, res) => {
    try {
        const user = await userService.login(req.body);
        res.status(200).send({ message: `Login Success`, user });
    } catch (e) {
        res.status(400).send({
            message: `Unable to login with these details`,
            user: req.body,
        });
    }
};
