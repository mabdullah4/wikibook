import readBookJsonFile from "@/helper/read-json-file";

export type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  genre: string;
  image: string;
};

export const getBooks = async (): Promise<Book[]> => {
  const books: Book[] = await new Promise((resolve) =>
    setTimeout(async () => {
      const books = await readBookJsonFile();
      resolve(books);
    }, 1000)
  );
  return books;
};

export const getBookById = async (id: number): Promise<Book | undefined> => {
  const book: Book | undefined = await new Promise((resolve) =>
    setTimeout(async () => {
      const books = await readBookJsonFile();
      const book = books.find((book) => book.id === id);
      resolve(book);
    }, 1000)
  );
  return book;
};
