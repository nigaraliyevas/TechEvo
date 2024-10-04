import "bootstrap/dist/css/bootstrap.min.css";
// import CardPC from "../../components/HomePageSections/CardPC/CardPC";
import CardPC from "../../components/CardPC/CardPC";
import styles from "./PCPage.module.scss";
import FilteredProducts from "../../components/FilteredProducts/FilteredProducts";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/search/SearchBar";

const PCPage = () => {

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://ff82f4df-f72b-4dec-84ca-487132aff620.mock.pstmn.io/api/v1/product/getAllProducts");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="pc">
      <div className="container">
        <div className={styles.pc_content}>
          <div className="row mb-4"  style={{marginLeft: "0px",marginRight: "0px"}}>
            <SearchBar />
          </div>
          <div className={`row ${styles.pc__bottom}`}>
            <div className="filter-side col-lg-3">
              <FilteredProducts />
            </div>
            <div className="product-side col-lg-9">
              <div className={styles.pc_section}>
                <div className="d-flex flex-wrap" style={{ gap: "30px" }}>
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
      <button onClick={fetchProducts}>Test</button>
    </section>
  );
};

export default PCPage;
