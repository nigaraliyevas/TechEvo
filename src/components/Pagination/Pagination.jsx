import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ products }) => {
  const itemsPerPage = 21; // Hər səhifədə 21 məhsul göstər

  if (products.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
