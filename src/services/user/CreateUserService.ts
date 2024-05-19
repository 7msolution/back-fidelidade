import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'


interface UserRequest{
    name: string;
    email: string;
    password: string
    cpf?: string, 
    userEmpresa? : number

}

class CreateUserService{
    async execute({name, email, password, cpf, userEmpresa}  :UserRequest){

        //verifica emails
        if(!email){
            throw new Error("Email não enviado");
        }

        //verifica se o e-mmail ja esta cadastrado

        const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
            email: email
        }
        })

        if(userAlreadyExists){
            return ({ status: false, error: "E-mail já foi cadastrado" })
        }

        const passwordHas = await hash(password, 8)

        


        //criado para diferenciar a role do dono do estabelecimento para o funcionario
        let _role = 1

        if(userEmpresa == 0){
            _role = 0
        }
        

      


        const user = await prismaClient.user.create({
            data:{
                name: name,
                email:email,
                password: passwordHas,
                cpf: cpf,
                role: _role
            },
            select:{
                id: true,
                email: true,
                name: true
            }
        })




        return({user})
    }
}

export  {CreateUserService} 