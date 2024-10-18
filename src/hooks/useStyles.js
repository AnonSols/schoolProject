import { useQuery } from "@tanstack/react-query";
import { getStyles } from "../services/getStyles";

export function useStyles() {
  const { data: styles, isLoading: isLoadingStyles } = useQuery({
    queryKey: ["styles"],
    queryFn: getStyles,
  });
  return { styles, isLoadingStyles };
}
