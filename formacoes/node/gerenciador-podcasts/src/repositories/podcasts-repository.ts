import fs from "fs";
import path from "path";

import type { Podcast } from "../models/podcasts-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async (podcastName?: string): Promise<Podcast[]> => {
  const language = "utf-8";
  const rawData = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter((poscast: Podcast) => poscast.podcastName === podcastName);
  }

  return jsonFile;
};
