import { Request, Response } from "express";
import { PartnerService } from "../../services/partnerService";

export const createPartnerController = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, baseRate, deliverySpeed } = req.body;
    if (!name || !email || !phone || !baseRate || !deliverySpeed) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const partner = await PartnerService.createPartner(req.body);

    res.status(201).json({
      message: "Partner created successfully",
      data: partner,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed To create partner" });
  }
};
