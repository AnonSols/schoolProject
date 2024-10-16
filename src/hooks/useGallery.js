import { useQuery } from "@tanstack/react-query";
import { getGallery } from "../services/getGallery";

export function useGallery() {
  const { data: galleries, isLoading: isLoadingGalleries } = useQuery({
    queryKey: ["galleries"],
    queryFn: getGallery,
  });

  return { galleries, isLoadingGalleries };
}
