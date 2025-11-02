import { Request, Response } from "express";
import { PartnerService } from "../../services/partnerService";

export const updatePartnerController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const partner = await PartnerService.updatePartner(id, req.body);
    res
      .status(200)
      .json({ message: "Partner updated successfully", data: partner });
  } catch (err) {
    res.status(500).json({ message: "Failed To update partner" });
  }
};
