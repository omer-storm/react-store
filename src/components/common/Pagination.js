import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  pageChange,
  previousPageChange,
  nextPageChange,
} from "../../features/mainStore/pagination/paginationSlice";

function Pagination() {
  const {
    currentPage,
    paginationRowLength,
    previousPages,
    previousPageTop,
    totalPages,
  } = useSelector((state) => state.pagination);
  const { filteredItems } = useSelector((state) => state.items);

  const dispatch = useDispatch();

  // const [currentPage, setCurrentPage] = useState(1);
  // const paginationRowLength = 3;
  // const [previousPages, setPreviousPages] = useState([1, 2, 3]);
  // const [previousPageTop, setPreviousPageTop] = useState(2);
  // const [totalPages, setTotalPages] = useState(
  //   Math.ceil(itemsCount / itemsPerPage)
  // );

  return (
    <nav aria-label="Page navigation" style={{ marginTop: 15 }}>
      <ul className="pagination justify-content-center">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <button
            onClick={() =>
              currentPage > 1 && previousPages.indexOf(currentPage - 1) !== -1
                ? dispatch(pageChange({ filteredItems, page: currentPage - 1 }))
                : dispatch(previousPageChange({ filteredItems, page: currentPage - 1 }))
            }
            className="page-link"
          >
            previous
          </button>
        </li>

        {previousPages.map((page, index) => (
          <React.Fragment key={index}>
            <li
              className={
                page !== currentPage ? "page-item" : "page-item active"
              }
            >
              <button
                onClick={() => dispatch(pageChange({ filteredItems, page }))}
                className="page-link"
              >
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
                  ? dispatch(nextPageChange({ filteredItems, page: currentPage + 1 }))
                  : dispatch(pageChange({ filteredItems, page: currentPage + 1 }))
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
