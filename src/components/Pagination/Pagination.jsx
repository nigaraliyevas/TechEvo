import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "./../../redux/slices/PaginationSlice";
import styles from "./Pagination.module.scss"; // Custom styling

const Pagination = () => {
  const dispatch = useDispatch();
  const { itemsPerPage } = useSelector(state => state.pagination);
  const { filteredProducts } = useSelector(state => state.filter);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = data => {
    dispatch(setPage(data.selected + 1));
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={styles.breakMe}
      pageCount={totalPages}
      marginPagesDisplayed={1} // Show the first and last page
      pageRangeDisplayed={5} // Show 5 pages before the break
      onPageChange={handlePageClick}
      containerClassName={styles.pagination}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      activeClassName={styles.active}
      previousClassName={styles.prevButton}
      nextClassName={styles.nextButton}
      disabledClassName={styles.disabled}
    />
  );
};

export default Pagination;
