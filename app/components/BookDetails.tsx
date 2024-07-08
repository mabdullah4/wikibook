import { Book } from "@/api/books";
import Image from "next/image";
import { FC } from "react";
import theBikeGuy from "@/public/books-images/the-bike-guy.png";

type BookDetailsProps = {
  book: Book;
};

const BookDetails: FC<BookDetailsProps> = ({ book }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-1">
        <Image src={theBikeGuy} alt={book.title} className="w-full" />

        <div className="flex flex-col">
          <button className="bg-blue-custom text-white p-2 mt-2 rounded-lg">
            Read Now
          </button>
          <button className="bg-neutral-950 text-white p-2 mt-2 rounded-lg">
            Download Now
          </button>
        </div>
      </div>
      <div className="md:col-span-3">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <p className="text-lg text-500">{book.genre}</p>
        <p className="text-lg text-gray-500">{book.author}</p>
        <div className="bg-gray-200 p-4 mt-4 rounded-lg">
          <h3>Description</h3>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
