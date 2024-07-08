import { Book } from "@/api/books";
import Image from "next/image";
import { FC } from "react";
import theBikeGuy from "@/public/books-images/the-bike-guy.png";
import Link from "next/link";

type BookCardProps = {
  book: Book;
};

const BookCard: FC<BookCardProps> = ({ book }) => {
  return (
    <Link href={`/book/${book.id}`} passHref>
      <div className="flex flex-col items-center rounded-lg my-4">
        <Image
          src={theBikeGuy}
          alt={book.title}
          className="h-full w-full object-cover rounded"
        />
        <div className="mt-2 w-full">
          <h1 className="text-xl font-bold">{book.title}</h1>
          <p className="text-sm text-500">{book.genre}</p>
          <p className="text-sm text-gray-500">{book.author}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
