import { Router } from "express";
import { OcorrenciaController } from "../controllers/OcorrenciaController";
import { ensureAuthenticated } from "../../../shared/middlewares/ensureAuthenticated";
import { ensureRole } from "../../../shared/middlewares/ensureRole";

export const ocorrenciaRoutes = Router();
const ocorrenciaController = new OcorrenciaController();

ocorrenciaRoutes.use(ensureAuthenticated);

ocorrenciaRoutes.post("/", ensureRole(["Morador", "Administrador", "Sindico"]), ocorrenciaController.create);
ocorrenciaRoutes.get("/", ensureRole(["Morador", "Administrador", "Sindico"]), ocorrenciaController.list);
ocorrenciaRoutes.patch("/:id_ocorrencia/status", ensureRole(["Administrador", "Sindico"]), ocorrenciaController.updateStatus);