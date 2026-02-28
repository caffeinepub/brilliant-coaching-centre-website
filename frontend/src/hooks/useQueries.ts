import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ExternalBlob } from '../backend';

// Gallery Queries
export function useGetAllGalleries() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['galleries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllGalleries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetGalleryImages(galleryId: string) {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['gallery-images', galleryId],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getImagesByGallery(galleryId);
    },
    enabled: !!actor && !isFetching && !!galleryId,
  });
}

// Gallery Mutations
export function useCreateGallery() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, name, description }: { id: string; name: string; description: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.createGallery(id, name, description);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['galleries'] });
    },
  });
}

export function useAddImage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      blob,
      title,
      description,
      galleryId,
    }: {
      id: string;
      blob: ExternalBlob;
      title: string;
      description: string;
      galleryId: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.addImage(id, blob, title, description, galleryId);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['gallery-images', variables.galleryId] });
      queryClient.invalidateQueries({ queryKey: ['galleries'] });
    },
  });
}

export function useDeleteImage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, galleryId }: { id: string; galleryId: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.deleteImage(id);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['gallery-images', variables.galleryId] });
      queryClient.invalidateQueries({ queryKey: ['galleries'] });
    },
  });
}
