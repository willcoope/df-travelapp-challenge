import { userService } from "../services/user.service.js";

export const changepasswordController = async (req, res) => {
    try {
        const user = await userService.changepassword(req.body);
        res.status(200).send({ message: `Password Changed`, user });
    } catch (e) {
        res.status(400).send({
            message: `Unable to change password with these details`,
            user: req.body,
        });
    }
}