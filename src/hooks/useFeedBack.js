 import { useQuery } from "@tanstack/react-query";
import { getFeedback } from "../services/getFeedback";

export function useFeedBack() {
    const {data:feedBacks, isLoading:isLoadingFeedBacks} = useQuery({
        queryKey:['feedBack'],
        queryFn:getFeedback
    })

    return {feedBacks, isLoadingFeedBacks}
}