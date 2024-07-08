import { getBookById } from "@/api/books";
import BookDetails from "@/app/components/BookDetails";
import Modal from "@/app/components/Modal";

const BookById = async () => {
  const bookById = await getBookById(1);

  if (!bookById) {
    return <div>Book not found</div>;
  }

  return (
    <Modal>
      <div className="container mx-auto px-4">
        <BookDetails book={bookById} />
      </div>
    </Modal>
  );
};

export default BookById;
