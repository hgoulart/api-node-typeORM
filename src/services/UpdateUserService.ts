import { AppDataSource } from "../database"
import { Users } from "../entity/Users"
import { IUser } from "../interfaces/IUser";

class UpdateUserService{

    async execute(user: IUser){
        const userRepository = AppDataSource.getRepository(Users);

        const userToUpdate = await userRepository.findOneBy({
            id: user.id,
        })
        if(userToUpdate){
            await userRepository.save(user);
        }
    }
}

export { UpdateUserService }