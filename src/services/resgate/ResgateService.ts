
import prismaClient from "../../prisma";


class ResgateService{


    async ResgateProntos({id_campanha, id_user}){

        const check = await prismaClient.$executeRaw ``
    }


    async ListResgate({id_empresa}){

        try{
            console.log(id_empresa)
            const resultado = await prismaClient.$queryRaw `select *, case when qtde_carimbo >= qtde_servico then 'Autorizado' else 'Não Autorizado' end as resgate from view_resumo_resgate_campanha where id_empresa = ${id_empresa}`


            console.log(resultado)
            return({status : true, resultado : resultado})

        }catch(error){

            return({status : false, resultado : error})
        }
        
    }
}

export {ResgateService}