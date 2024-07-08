"use client";

import Banner from "./components/Banner";
import BookCard from "./components/BookCard";
import { FC, useEffect, useMemo, useState } from "react";
import Pagination from "./components/Pagination";
import { BookAndGenreResponse } from "./api/route";
import GenreDropdown from "./components/GenreDropdown";

const PAGE_SIZE = 10;

const Home: FC = () => {
  const [data, setData] = useState<BookAndGenreResponse>({
    books: [],
    genres: [],
    totalRecords: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  /**
   * Would like to use a proper setup for fetching data
   * but for now, as this project will only have two pages
   * this will do.
   *
   * But if it grows, consider using something like SWR or React Query
   */
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const queryParams = selectedGenre ? `?genre=${selectedGenre}` : "";

      const res = await fetch(`/api${queryParams}`);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [selectedGenre]);

  const onGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedGenre(e.target.value);

  const paginatedBooks = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return data?.books.slice(start, end);
  }, [data?.books, currentPage]);

  return (
    <>
      <Banner />
      <div className="container mx-auto px-4">
        <GenreDropdown genres={data?.genres} onGenreChange={onGenreChange} />
        {isLoading && <div>Fetching the books...</div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {paginatedBooks?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <Pagination
          page={currentPage}
          totalPage={Math.ceil(data?.totalRecords / PAGE_SIZE)}
          setPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Home;
