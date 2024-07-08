import classNames from "classnames";
import { FC } from "react";

type PaginationProps = {
    page: number;
    setPage: (page: number) => void;
    totalPage: number;
};

const Pagination:FC<PaginationProps> = ({ page, setPage, totalPage }) => {
    const onPrevious = () => {
        if (page === 1) return;
        setPage(page - 1);
    }

    const onNext = () => {
        if (page >= totalPage) return;
        setPage(page + 1);
    }

    console.log("page", page, totalPage);
    

    return (
        <div className="flex justify-center gap-4 my-8">
            <button
                disabled={page === 1}
                onClick={onPrevious}
                className={classNames("px-4 py-2 bg-blue-500 text-white rounded-md",{
                    invisible: page === 1
                })}
            >
                Previous
            </button>

            <button
                disabled={page >= totalPage}
                onClick={onNext}
                className={classNames("px-4 py-2 bg-blue-500 text-white rounded-md",{
                    invisible: page === totalPage
                })}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;