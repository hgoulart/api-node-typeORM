import { Request, Response}  from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController{

    async handle( request: Request, response: Response) {

        const deleteUserService = new DeleteUserService();
        const id = Number(request.params.id);

        if(!id){
            return response.status(400).json({message: `Necessário passar o ID!`})
        }

        const user = await deleteUserService.execute(id);

        return response.status(200).json(user);
    }
}

export { DeleteUserController }