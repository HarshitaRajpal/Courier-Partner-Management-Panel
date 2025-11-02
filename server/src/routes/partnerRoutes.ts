import express from "express";
import { getPartners } from "../controllers/partner/getPartners";
import { createPartner } from "../controllers/partner/createPartner";
import { updatePartner } from "../controllers/partner/updatePartner";
import { deletePartner } from "../controllers/partner/deletePartner";
import { getPartnerById } from "../controllers/partner/getPartnerById";


const router = express.Router();

router.get("/", getPartners);
router.post("/", createPartner);
router.put("/:id", updatePartner); 
router.delete("/:id", deletePartner); 
router.get("/:id", getPartnerById);

export default router;
