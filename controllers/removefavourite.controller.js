import { userService } from "../services/user.service.js";

export const removefavouriteController = async (req, res) => {
    try {
        const favourites = await userService.removefavourite(req.body);
        res.status(200).send({ message: `Favourite removed`, favourites: favourites});
    } catch (e) {
        res.status(400).send({
            message: `Unable to remove favourite with these details`,
            user: req.body,
        });
    }
}