import { Request, Response } from "express";
import { PartnerService } from "../../services/partnerService";

export const getPartnerByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const partner = await PartnerService.getPartnerById(id);
    res.json(partner);
  } catch (error) {
    res.status(500).json({
      message: `Failed To fetch data for partner with id: ${req.params.id}`,
    });
  }
};
