import { AppDataSource } from "../database"
import { Users } from "../entity/Users"

class FindUserService{

    async execute(id: number){
        const userRepository = AppDataSource.getRepository(Users);

        const user = await userRepository.findOneBy({
            id: id,
        })

        return user;
    }

}

export { FindUserService }