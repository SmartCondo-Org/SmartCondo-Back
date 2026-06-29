import { Router } from "express";
import { FinanceiroController } from "../controllers/FinanceiroController";
import { ensureAuthenticated } from "../../../shared/middlewares/ensureAuthenticated";
import { ensureRole } from "../../../shared/middlewares/ensureRole";

export const financeiroRoutes = Router();
const financeiroController = new FinanceiroController();

financeiroRoutes.use(ensureAuthenticated);
financeiroRoutes.use(ensureRole(["Administrador", "Sindico"]));

financeiroRoutes.post("/", financeiroController.create);
financeiroRoutes.get("/", financeiroController.list);
financeiroRoutes.patch("/:id_transacao/pagar", financeiroController.pagar);
