import { CarimboProps } from "../../interface/interface";
import prismaClient from "../../prisma";


export interface EmpresaProps {
    id_empresa : number
}


class CarimboService{



    async BuscaCarimboClienteMensal({id_empresa}){

        try{

            const result = await prismaClient.$queryRaw `select * from view_resumo_campanha_carimbo where id_empresa = ${ id_empresa } `
            
            return({status : true, resultado : result})

        }catch(error){

            return({status : false, resultado: error})
        }
  
    }

    async insereCarimbo({id_user_carimbou, cpf, id_campanha} : CarimboProps){ 

        try{


            const id_user = await prismaClient.user.findMany({
                where:{
                    cpf : cpf
                },
                select: {
                    id : true
                }
            })

            const result = await prismaClient.carimbo.create({

                data :{
                    id_user_carimbou : id_user_carimbou,
                    id_user : id_user[0].id,
                    id_campanha : id_campanha,
           
                }
              
            })

            return ({ status : true})

        }catch(error){
            console.log(error)
            return ({ status : false})

        }



    }

}

export { CarimboService }