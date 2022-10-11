import { IUser }  from '../interfaces/IUser';
import { AppDataSource } from "../database"
import { Users } from "../entity/Users"

class CreateUserService{

    async execute({ name, email, isActive }: IUser){
        const user = new Users();

        user.name = name;
        user.email = email;
        user.isActive = isActive;

        await AppDataSource.manager.save(user);
    }
}

export { CreateUserService }