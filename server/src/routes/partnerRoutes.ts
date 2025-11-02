import express from "express";
import { createPartnerController } from "../controllers/partner/createPartnerController";
import { deletePartnerController } from "../controllers/partner/deletePartnerController";
import { getPartnerByIdController } from "../controllers/partner/getPartnerByIdController";
import { getPartnersController } from "../controllers/partner/getPartnersController";
import { updatePartnerController } from "../controllers/partner/updatePartnerController";

const router = express.Router();

router.get("/", getPartnersController);
router.post("/", createPartnerController);
router.put("/:id", updatePartnerController);
router.delete("/:id", deletePartnerController);
router.get("/:id", getPartnerByIdController);

export default router;
