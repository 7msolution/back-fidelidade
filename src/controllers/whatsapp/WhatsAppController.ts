import WhatsMensagem from "../../services/whatsapp/conversa"
import { Request, Response } from "express";


class WhatsAppController{

    async sendMensagem(req :Request, res : Response){

        const whatsMensagem = new WhatsMensagem()

        whatsMensagem.sendMensagem()

        res.status(200)
        res.json({mensagem: "mensagem enviada"})

        

    }
}

export default WhatsAppController