import { Request, Response}  from "express";
import { FindAllUserService } from "../services/FindAllUserService";

class FindAllUserController{

    async handle( request: Request, response: Response) {

        const findAllUserService = new FindAllUserService();

        const users = await findAllUserService.execute();

        return response.status(200).json(users);
    }
}

export { FindAllUserController }