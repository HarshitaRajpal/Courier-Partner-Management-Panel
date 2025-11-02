import { partnersApi } from "./api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Partner } from "./types";
import { message } from "antd";

export const PARTNERS_QUERY_KEY = "PARTNERS";

export const useGetAllPartners = () => {
  return useQuery({
    queryKey: [PARTNERS_QUERY_KEY],
    queryFn: partnersApi.getAllPartners,
  });
};

export const useGetPartnerById = (id: string) => {
  return useQuery({
    queryKey: [PARTNERS_QUERY_KEY, id],
    queryFn: () => partnersApi.getPartnerById(id),
  });
};

export const useCreatePartner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: partnersApi.createPartner,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PARTNERS_QUERY_KEY] });
      message.success("Partner created successfully");
    },
    onError: (error) => {
      console.log(error);
      message.error(error.message || "Failed to create partner");
    },
  });
};

export const useUpdatePartner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, partner }: { id: string; partner: Partner }) =>
      partnersApi.updatePartner(id, partner),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PARTNERS_QUERY_KEY] });
      message.success("Partner updated successfully");
    },
    onError: (error) => {
      console.log(error);
      message.error(error.message || "Failed to update partner");
    },
  });
};
