# API Rest desenvolvida com Node.js, express, TypeORM e MySQL

## CRUD completo com banco de dados

### Database

database/index.ts

db: crud_db

### Entity: User
```
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column()
    email: string

    @Column()
    isActive: boolean
}
```
### Interface: User
```
export interface IUser{
    id?: number,
    name: string,
    email: string,
    isActive: boolean
}
```
### Controllers

CreateUserController, DeleteUserController, FindAllUserController, FindUserController, UpdateUserController

### Services

CreateUserService, DeleteUserService, FindAllUserService, FindUserService, UpdateUserService

### Exemplo chamada API

Criar usuário: POST http://localhost:5000/users
```
{
  "name": "aqui vai o nome do usuário",
  "email": "aqui vai o email do usuário",
  "isActive": "aqui vai true ou false"
}
```
Buscar usuário: GET http://localhost:5000/users/1

Buscar Todos os usuário: GET http://localhost:5000/users

Remover usuário: DELETE: http://localhost:5000/users

Atualizar usuário: PUT http://localhost:5000/users
```
{
  "id": 1,
  "name": "aqui vai o nome do usuário",
  "email": "aqui vai o email do usuário",
  "isActive": "aqui vai true ou false"
}
```
## Instalar as dependências

npm install

## Subir a aplicação

npm run dev

## Documentação e Links 

TypeORM
[clique aqui](https://typeorm.io/readme#step-by-step-guide)

REST API Tutorial
[clique aqui](https://www.restapitutorial.com/lessons/httpmethods.html)