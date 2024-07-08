import { getBookById } from "@/api/books";
import BookDetails from "@/app/components/BookDetails";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import { FC } from "react";

type BookByIdProps = {
  params: {
    id: string;
  };
};

const BookById: FC<BookByIdProps> = async ({ params }) => {
  const bookById = await getBookById(Number(params.id));

  if (!bookById) {
    return <div>Book not found</div>;
  }

  return (
    <Modal>
      <div className="container mx-auto px-4 w-full">
        <BookDetails book={bookById} />
      </div>
    </Modal>
  );
};

export default BookById;
