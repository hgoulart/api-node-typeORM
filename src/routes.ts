import { Router, Request, Response}  from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { FindAllUserController } from "./controllers/FindAllUserController";
import { FindUserController } from "./controllers/FindUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router()

const createUserController = new CreateUserController();
const findUserController = new FindUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const findAllUserController = new FindAllUserController();

router.get('/', ( req: Request, res: Response) => {
    return res.json({mensagem: "Olá Mundo;"})
})

router.route("/users")
.get(findAllUserController.handle)
.post(createUserController.handle)
.put(updateUserController.handle);


router.route('/users/:id')
.get(findUserController.handle)
.delete(deleteUserController.handle);

export { router }