import "bootstrap/dist/css/bootstrap.min.css";
// import CardPC from "../../components/HomePageSections/CardPC/CardPC";
import CardPC from "../../components/CardPC/CardPC";
import styles from "./PCPage.module.scss";
import FilteredProducts from "../../components/FilteredProducts/FilteredProducts";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/search/SearchBar";

const PCPage = () => {
  return (
    <section className="pc">
      <div className="container">
        <div className={styles.pc_content}>
          <div className="row mb-4">
            <SearchBar />
          </div>
          <div className={`row ${styles.pc__bottom}`}>
            <div className="filter-side col-lg-3">
              <FilteredProducts />
            </div>
            <div className="product-side col-lg-9">
              <div className={styles.pc_section}>
                <div className="d-flex flex-wrap gap-2">
                  <CardPC />
                </div>
              </div>
              <div className="pagination-side">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCPage;
