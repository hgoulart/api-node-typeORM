import { Request, Response}  from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{

    async handle( request: Request, response: Response) {

        const createUserService = new CreateUserService();

        const name = request.body.name;
        const email = request.body.email;
        const isActive = request.body.isActive;

        if(name.length === 0 || email.length === 0){
            return response.status(400).json({message: `Nome ou email faltando!`})
        }

        const user = await createUserService.execute( {name, email, isActive});

        return response.status(201).json(user);
    }
}

export { CreateUserController }