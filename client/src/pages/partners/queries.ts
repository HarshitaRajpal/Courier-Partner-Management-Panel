import { partnersApi } from "./api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Partner } from "./types";
import { toast } from "sonner";
import type { AxiosError } from "axios";

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
      toast.success("Partner created successfully");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error(error);
      const errorMsg = error?.message || "Failed to create partner";
      toast.error(errorMsg);
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
      toast.success("Partner updated successfully");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error(error);
      const errorMsg = error?.message || "Failed to update partner";
      toast.error(errorMsg);
    },
  });
};
