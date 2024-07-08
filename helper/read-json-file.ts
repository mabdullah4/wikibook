import path from "path";
import { promises as fs } from "fs";
import { Book } from "@/api/books";

const readBookJsonFile = async () => {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/books-store-db.json",
    "utf8"
  );

  const books: Book[] = JSON.parse(fileContents).books;

  return books;
};

export default readBookJsonFile;
