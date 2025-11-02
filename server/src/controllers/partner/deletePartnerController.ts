import { Request, Response } from "express";
import { PartnerService } from "../../services/partnerService";

export const deletePartnerController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await PartnerService.deletePartner(id);
    res.json({ message: "Partner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed To delete partner" });
  }
};
