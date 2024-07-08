import classNames from "classnames";
import { FC } from "react";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
};

const Pagination: FC<PaginationProps> = ({ page, setPage, totalPage }) => {
  const onPrevious = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const onNext = () => {
    if (page >= totalPage) return;
    setPage(page + 1);
  };

  const pages = Array(totalPage).fill(0);

  return (
    <div className="flex justify-center gap-4 my-8">
      <button
        disabled={page === 1}
        onClick={onPrevious}
        className={classNames(
          "px-4 py-2 bg-blue-custom text-white rounded-md",
          {
            hidden: page === 1,
          }
        )}
      >
        &lt;
      </button>

      {pages.map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={classNames("px-4 py-2 text-white rounded-md", {
            "bg-blue-custom text-white": i === page - 1,
            "bg-gray-100 text-gray-600": i !== page - 1,
          })}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page >= totalPage}
        onClick={onNext}
        className={classNames(
          "px-4 py-2 bg-blue-custom text-white rounded-md",
          {
            hidden: page === totalPage,
          }
        )}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
