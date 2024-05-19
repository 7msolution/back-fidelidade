import { Request, Response } from "express";
import { CamapanhaService } from "../../services/campanha/CampanhaService";


interface EmpresaProps{
    id_empresa :number
}

class CampanhaController{



    async clienteCampanha (req : Request, res : Response){

        
    }

    async CampaFormulario(req : Request, res : Response){

        const campanhaService = new CamapanhaService()

        const token = req.query.id
        const { nome, email, cpf, celular} =  req.body
        
        const resultado = await campanhaService.campaFormulario({token, nome, email, cpf, celular})


        if(resultado.status == true){

            res.status(200)
            res.json({ status : true, mensagem : "Token validado com sucesso!"})

        }else{

            res.status(400)
            res.json({ status : false, mensagem : "Token com problema!"})
        }

    }

    async resumoCampanha(req : Request, res : Response){

        const id_empresa = req.query.id_empresa
        const campanhaService = new CamapanhaService()

        
        const result = await campanhaService.resumoCamapnha(id_empresa)

        if(result.status == true){
            res.status(200)
            res.json({ status : true, resultado : result.resultado})
        }

    }

    async ListCampanha(req: Request, res : Response){
    
        const id_empresa  = (+req.query.id_empresa)

        const campanhaService = new CamapanhaService()

         const result  = await campanhaService.ListCampanhas(id_empresa)

        res.status(200)
        res.json({status : true, resultado : result.resultado})

        
    }

    async UpdateCampanha (req: Request, res: Response){

        let {nome_campanha, data_inicio, data_fim, qtde_servico, id_empresa, descricao, id_user, id_campanha } = req.body
        const campanhaService = new CamapanhaService()

        let data_conv_ini = new Date(data_inicio)
        let data_conv_fim = new Date(data_fim)      
         
        data_inicio = data_conv_ini.toISOString()
        data_fim = data_conv_fim.toISOString()
        

        const result = await campanhaService.updateCampanha({nome_campanha, data_inicio, data_fim, qtde_servico, id_empresa, descricao, id_user, id_campanha})

        if(result.status == true){
            res.status(200)
            res.json({status : true, mensagem : "Campanha atualizada com sucesso!!!"})
        }else{
            res.status(400)
            res.json({status : false, mensagem : "Não foi possivel atualizar a campanha!!!"})
        }

    }

    async createCampanha(req : Request, res : Response){

        let {nome_campanha, data_inicio, data_fim, qtde_servico, id_empresa, descricao, id_user, gera_token, nro_campanha_cliente, qtde_token} = req.body

        const campanhaService = new CamapanhaService()

        
       let data_conv_ini = new Date(data_inicio)
       let data_conv_fim = new Date(data_fim)      
        
       data_inicio = data_conv_ini.toISOString()
       data_fim = data_conv_fim.toISOString()
        
   

        const resultado = await campanhaService.createCampanha({nome_campanha, data_inicio, data_fim, qtde_servico, id_empresa, descricao, id_user, gera_token, nro_campanha_cliente, qtde_token})

        if(resultado.status == true){
            res.status(200)
            res.json({status : true, mensagem : "Campanha criada com sucesso"})
        }else{
            res.status(400)
            res.json({status : false, mensagem : "Não foi possivel criar a campanha"})
        }
    
                 
                   
        
    }
}

export {CampanhaController}