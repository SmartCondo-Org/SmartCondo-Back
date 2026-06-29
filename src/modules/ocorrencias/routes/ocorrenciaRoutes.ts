import { Router } from "express";
import { OcorrenciaController } from "../controllers/OcorrenciaController";
import { ensureAuthenticated } from "../../../shared/middlewares/ensureAuthenticated";
import { ensureRole } from "../../../shared/middlewares/ensureRole";

export const ocorrenciaRoutes = Router();
const ocorrenciaController = new OcorrenciaController();

// Todas as rotas de ocorrências exigem que o usuário esteja logado
ocorrenciaRoutes.use(ensureAuthenticated);

// Qualquer morador, síndico ou admin pode abrir uma ocorrência e listar ocorrências
ocorrenciaRoutes.post("/", ensureRole(["Morador", "Administrador", "Sindico"]), ocorrenciaController.create);
ocorrenciaRoutes.get("/", ensureRole(["Morador", "Administrador", "Sindico"]), ocorrenciaController.list);

// Apenas Síndicos e Administradores podem mudar o status (ex: para 'Resolvida')
ocorrenciaRoutes.patch("/:id_ocorrencia/status", ensureRole(["Administrador", "Sindico"]), ocorrenciaController.updateStatus);
