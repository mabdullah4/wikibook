import readBookJsonFile from "@/helper/read-json-file";
import { Book } from "./books";

export const getGenres = async (): Promise<string[]> => {
  const genres: string[] = await new Promise((resolve) =>
    setTimeout(async () => {
      const books = await readBookJsonFile();
      const genres = books.map((book: Book) => book.genre);
      resolve([...new Set(genres)]);
    }, 1000)
  );
  return genres;
};
