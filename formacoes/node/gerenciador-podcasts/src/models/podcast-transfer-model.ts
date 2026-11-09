import type { Podcast } from "./podcasts-model";

export interface PodCastTransferModel {
    statusCode: number;
    body: Podcast[];
}