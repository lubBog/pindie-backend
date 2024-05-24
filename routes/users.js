const usersRouter = require("express").Router();

const { checkAuth }= require("../middlewares/auth");

const {
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  findUserById,
  createUser,
  deleteUser,
  checkEmptyNameAndEmail,
  updateUser,
  hashPassword,
} = require("../middlewares/users");

const {
  sendMe,
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserDeleted,
  sendUserUpdated,
} = require("../controllers/users");



usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);

usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
