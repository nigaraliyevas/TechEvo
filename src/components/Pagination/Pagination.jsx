import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "./../../redux/slices/PaginationSlice";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();


  const { itemsPerPage } = useSelector(state => state.pagination);
  const { filteredProducts } = useSelector(state => state.filter);


  if (filteredProducts.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (data) => {

    window.scrollTo({ top: 0, behavior: "smooth" });


    dispatch(setPage(data.selected + 1));
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={styles.breakMe}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
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
