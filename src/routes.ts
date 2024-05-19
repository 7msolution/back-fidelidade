import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController"
import { ListUser } from "./controllers/user/ListUserController"
import { EmpresaController } from "./controllers/empresa/EmpresaController"
import { CampanhaController } from "./controllers/campanha/CampanhaController"
import { isAuth } from "./middlewares/isAuth";
import { CarimboController } from "./controllers/carimbo/CarimboController";
import { UsuarioController } from "./controllers/usuario/UsuarioController";
import { UserEmpresaController } from "./controllers/user/UserEmpresaController";
import WhatsAppController from "./controllers/whatsapp/WhatsAppController";
import PainelClienteController from "./controllers/painel-cliente/PainelClienteController";
import { ResgateController } from "./controllers/resgate/ResgateController";

const router= Router();

//--ROTAS URSERS 
router.post("/user", new CreateUserController().handle)
router.get("/user", new ListUser().handle)
router.get("/userfind/:id_user", new ListUser().findUsuario_id)
router.post("/login", new AuthUserController().handle)


router.put("/usuarioatualiza/:cpf", new UsuarioController().UpdateUsuarioEmail)

// -- Rotas empresa
router.post("/empresa", new EmpresaController().createEmpresa)
router.get("/empresa", new EmpresaController().listEmpresa)
router.get("/empresauser", new EmpresaController().listEmpresauserId)
router.post("/userempresa", new UserEmpresaController().createUserEmpresa)
router.post("/userempresafunc", new UserEmpresaController().CreateFuncEmpresa)


//-- painel cliente

router.get("/painelcliente/:id_user" , new PainelClienteController().ListPainelController)

// -- Rotas campanha
router.post("/campanha", new CampanhaController().createCampanha)
router.post("/campanhaformulario", new CampanhaController().CampaFormulario)
router.get("/campanha", new CampanhaController().ListCampanha)
router.get("/resumocampanha", new CampanhaController().resumoCampanha)
router.put("/campanha", new CampanhaController().UpdateCampanha)


//--Rotas Carimbo
router.post("/carimbo", new CarimboController().inserCarimbo)
router.get("/carimbo/:id_empresa", new CarimboController().BuscaCarimboClienteMensalControoler)

//--resgate
router.get("/resgate/:id_empresa", new ResgateController().ListResgate)

router.post("/whats", new WhatsAppController().sendMensagem)

//--usuario usado para buscar dados da api datastone
//router.get("/usuario/:cpf&:empresaId", new UsuarioController().UsuarioCheck)
router.get("/usuario/:cpf", new UsuarioController().UsuarioCheck)
export {router}