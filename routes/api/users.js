const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/:username")
  .get(userController.getOne)

router.route("/favorites/:id")
  .post(userController.addFavorite)


module.exports = router;