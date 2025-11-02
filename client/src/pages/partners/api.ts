import baseApi from "../../api/axiosInstance";
import type { Partner } from "./types";

export const partnersApi = {
  getAllPartners: async () => {
    const { data } = await baseApi.get("/partners");
    return data;
  },
  getPartnerById: async (id: string) => {
    const { data } = await baseApi.get(`/partners/${id}`);
    return data;
  },
  createPartner: async (partner: Partner) => {
    const { data } = await baseApi.post("/partners", partner);
    return data;
  },
  updatePartner: async (id: string, partner: Partner) => {
    const { data } = await baseApi.put(`/partners/${id}`, partner);
    return data;
  },
};
