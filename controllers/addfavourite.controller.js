import { userService } from "../services/user.service.js";

export const addfavouriteController = async (req, res) => {
    try {
        const user = await userService.addfavourite(req.body);
        res.status(200).send({ message: `Favourite added`, user });
    } catch (e) {
        res.status(400).send({
            message: `Unable to add favourite with these details`,
            user: req.body,
        });
    }
}