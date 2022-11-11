var express = require("express");
var router = express.Router();

/* Controller */
const {
  register,
  login,
  edit,
  update,
  remove
} = require("../../controllers/api/usersController");

/* Middlewares */
const uploadFile = require("../../middlewares/multerMiddleware");
const {
  validatorRegister,
  validatorLogin,
  validatorEditUser} = require("../../validations");
router
  .post("/register", uploadFile.single("avatar"), validatorRegister, register)
  .get("/edit/:id", edit)
  .put("/update/:id", validatorEditUser, update)
  .post("/login", validatorLogin, login)
  .delete("/remove/:id", remove);

module.exports = router;
