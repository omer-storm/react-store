import { useEffect, useState } from "react";
import React from "react";

function Pagination({ onPageChange, itemsCount, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRowLength = 3;
  const [previousPages, setPreviousPages] = useState([1]);
  const [previousPageTop, setPreviousPageTop] = useState(0);
  const [totalPages,setTotalPages] = useState(Math.ceil(itemsCount / itemsPerPage));

  useEffect(() => {
    setCurrentPage(1);
    setTotalPages(Math.ceil(itemsCount / itemsPerPage))
  }, [itemsCount]);

  const PageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const PreviousPageChange = (page) => {
    const index = previousPages.indexOf(page - 1);
    if (index === -1) {
      if (page > paginationRowLength) {
        previousPages[previousPageTop - 1] = page - 1;
        previousPages[previousPageTop] = page;
      }
    } else {
      previousPages[previousPageTop] = page + 1;
      previousPages[previousPageTop - 1] = page;
    }

    setPreviousPages(previousPages);
    PageChange(page);
  };

  const NextPageChange = (page) => {
    let updatePreviousPageTop = previousPageTop;

    if (previousPageTop <= paginationRowLength) {
      updatePreviousPageTop++;
      previousPages[updatePreviousPageTop] = page;
    } else {
      previousPages[updatePreviousPageTop - 1] = page - 1;
      previousPages[updatePreviousPageTop] = page;
    }

    PageChange(page);
    setPreviousPages(previousPages);
    setPreviousPageTop(updatePreviousPageTop);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
          >
            <button
              onClick={() =>
                currentPage > 1 && previousPages.indexOf(currentPage - 1) !== -1
                  ? PageChange(currentPage - 1)
                  : PreviousPageChange(currentPage - 1)
              }
              className="page-link"
            >
              previous
            </button>
          </li>
        }

        {previousPages.map((page, index) => (
          <React.Fragment key={index}>
            <li
              className={
                page !== currentPage ? "page-item" : "page-item active"
              }
            >
              <button onClick={() => PageChange(page)} className="page-link">
                {page}
              </button>
            </li>

            {page === paginationRowLength &&
              previousPageTop - 1 === paginationRowLength && (
                <li className="page-item disabled">
                  <button className="page-link">..</button>
                </li>
              )}
          </React.Fragment>
        ))}

        {currentPage < totalPages && (
          <li>
            <button
              onClick={() =>
                previousPages.indexOf(currentPage + 1) === -1
                  ? NextPageChange(currentPage + 1)
                  : PageChange(currentPage + 1)
              }
              className="page-link"
            >
              next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
