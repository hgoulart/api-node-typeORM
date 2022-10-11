import { Request, Response}  from "express";
import { FindUserService } from "../services/FindUserService";

class FindUserController{

    async handle( request: Request, response: Response) {

        const findUserService = new FindUserService();
        const id = Number(request.params.id);
        
        if(!id){
            return response.status(400).json({message: `Necessário passar o ID!`})
        }

        const user = await findUserService.execute(id);

        return response.status(200).json(user);
    }
}

export { FindUserController }