import { useQuery } from "@tanstack/react-query";
import { getGallery } from "../services/getGallery";

export function useGallery() {
  const { data: galleries, isLoading: isLoadingGalleries } = useQuery({
    queryKey: ["galleries"],
    queryFn: getGallery,
  });

  console.log("Styles:", galleries); // Log the fetched styles
  console.log("Loading:", isLoadingGalleries); // Log loading state
  return { galleries, isLoadingGalleries };
}
