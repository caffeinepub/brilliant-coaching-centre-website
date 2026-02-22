import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

// Review mutations
export function useSubmitReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      fullName,
      classYear,
      subjects,
      review,
      rating,
    }: {
      fullName: string;
      classYear: string;
      subjects: string | null;
      review: string;
      rating: number | null;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitReview(fullName, classYear, subjects, review, rating);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
}

export function useGetAllReviews() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetApprovedReviews() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['reviews', 'approved'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getApprovedReviews();
    },
    enabled: !!actor && !isFetching,
  });
}
