import { Request, Response}  from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController{

    async handle( request: Request, response: Response) {

        const updateUserService = new UpdateUserService();

        const user = request.body;

        if(!user.id){
            return response.status(400).json({message: `Necessário passar o ID!`})
        }

        let updatedData = await updateUserService.execute(user);

        return response.status(200).json(updatedData);
    }
}

export { UpdateUserController }