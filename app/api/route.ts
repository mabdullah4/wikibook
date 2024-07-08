import { Book, getBooks } from "@/api/books";
import {getGenres} from '@/api/genre'

export type BookAndGenreResponse = {
  books: Book[];
  genres: string[];
  totalRecords: number;
};

export const GET = async (req: Request) => {
  const query = new URLSearchParams(req.url.split("?")[1]);
  const genre = query.get("genre");

  const books = await getBooks();
  const genres = await getGenres();

  if (genre) {
    const booksByGenre = books.filter((book) => book.genre === genre);
    return Response.json({ books: booksByGenre, genres,
      totalRecords: booksByGenre.length
     });
  }

  return Response.json({ books, genres,
    totalRecords: books.length

   });
};
