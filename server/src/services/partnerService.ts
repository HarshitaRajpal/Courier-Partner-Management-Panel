import { Partner } from "@prisma/client";
import prisma from "../prisma/client";

export const PartnerService = {
  getPartners: async () => {
    return await prisma.partner.findMany({ orderBy: { createdAt: "desc" } });
  },
  getPartnerById: async (id: string) => {
    return await prisma.partner.findUnique({ where: { id } });
  },
  createPartner: async (partner: Partner) => {
    return await prisma.partner.create({ data: partner });
  },
  updatePartner: async (id: string, partner: Partner) => {
    return await prisma.partner.update({ where: { id }, data: partner });
  },
  deletePartner: async (id: string) => {
    return await prisma.partner.delete({ where: { id } });
  },
};
