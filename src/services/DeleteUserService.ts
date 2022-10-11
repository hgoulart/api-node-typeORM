import { AppDataSource } from "../database"
import { Users } from "../entity/Users"

class DeleteUserService{

    async execute(id: number){
        const userRepository = AppDataSource.getRepository(Users);
        const userToRemove = await userRepository.findOneBy({
            id: id,
        })
        await userRepository.remove(userToRemove);
    }

}

export { DeleteUserService }