import { Request, Response } from "express";
import { PartnerService } from "../../services/partnerService";

export const getPartnersController = async (req: Request, res: Response) => {
  try {
    const partners = await PartnerService.getPartners();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: "Failed To fetch partners data!" });
  }
};
