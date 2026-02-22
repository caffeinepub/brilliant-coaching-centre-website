import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Gallery {
    id: string;
    name: string;
    description: string;
}
export interface Image {
    id: string;
    title: string;
    blob: ExternalBlob;
    description: string;
    galleryId: string;
}
export interface Review {
    review: string;
    subjects?: string;
    fullName: string;
    approved: boolean;
    timestamp: bigint;
    rating?: number;
    classYear: string;
}
export interface backendInterface {
    addImage(id: string, blob: ExternalBlob, title: string, description: string, galleryId: string): Promise<boolean>;
    approveReview(fullName: string): Promise<boolean>;
    createGallery(id: string, name: string, description: string): Promise<boolean>;
    deleteGallery(id: string): Promise<boolean>;
    deleteImage(id: string): Promise<boolean>;
    getAllGalleries(): Promise<Array<Gallery>>;
    getAllReviews(): Promise<Array<Review>>;
    getApprovedReviews(): Promise<Array<Review>>;
    getGallery(id: string): Promise<Gallery | null>;
    getImage(id: string): Promise<Image | null>;
    getImagesByGallery(galleryId: string): Promise<Array<Image>>;
    submitReview(fullName: string, classYear: string, subjects: string | null, review: string, rating: number | null): Promise<void>;
}
