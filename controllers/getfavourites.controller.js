import { userService } from "../services/user.service.js";

export const getfavouritesController = async (req, res) => {
    try {
        const favourites = await userService.getfavourites(req.body);
        res.status(200).send({ message: `Favourites fetched`, favourites });
    } catch (e) {
        res.status(400).send({
            message: `Unable to fetch favourites with these details`,
            user: req.body,
        });
    }
}