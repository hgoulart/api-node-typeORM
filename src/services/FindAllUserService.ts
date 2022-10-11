import { AppDataSource } from "../database"
import { Users } from "../entity/Users"

class FindAllUserService{

    async execute(){
        const userRepository = AppDataSource.getRepository(Users);
        return await userRepository.find();
    }

}

export { FindAllUserService }