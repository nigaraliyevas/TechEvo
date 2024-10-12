import "bootstrap/dist/css/bootstrap.min.css";
// import CardPC from "../../components/HomePageSections/CardPC/CardPC";
// import CardPC from "../../components/CardPC/CardPC";
import styles from "./CategoryPage.module.scss";
import Pagination from "../../../components/Pagination/Pagination";
import SearchBar from "../../../components/search/SearchBar";
import { useState } from "react";
import { products, queries } from "../../../products";
import ProductCard from "../../../components/common/ProductCard/ProductCard";
import FilterSidebar from "../../../components/FilteredProducts/FilterSideBar";

const CategoryPage = () => {
//* PcPage idi adi dinamik olmalidi deye CategoryPage qoydum adini
//* Sectiyimiz sehifeye uygun ya pc ya laptop ve.s avtomatik islemelidir

  const [filterQueries, setFilterQueries] = useState({
    query: "",
    price: {
      min: 0,
      max: 2000,
    },
    category: [],
    brand: [],
    processor: [],
    videoCard: [],
    ram: [],
    storage: []
  });

  const handleSearch = (data) => {
    setFilterQueries({ ...filterQueries, query: data });
  };

  const handleFilter = (data, key) => {
    setFilterQueries({ ...filterQueries, [key]: data });
  }

  const handlePrice = (data) => {
    setFilterQueries({ ...filterQueries, price: data });
  }

  return (
    <section className="pc">
      <div className="container">
        <div className={styles.pc_content}>
          <div className="row mb-4" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <SearchBar handleSearch={handleSearch} />
          </div>
          <div className={`row ${styles.pc__bottom}`}>
            <div className="filter-side col-lg-3">
              <FilterSidebar data={queries} handleFilter={handleFilter} handlePrice={handlePrice} />
            </div>
            <div className="product-side col-lg-9">
              <div className={styles.pc_section}>
                <div className="d-flex flex-wrap" style={{ gap: "30px" }}>
                  {products.length === 0 ? (
                    <div className={styles.noProductsMessage}>There are no products.</div>
                  ) : (
                    products.map(card => (
                      <ProductCard key={card.id} data={card} />
                    ))
                  )}
                </div>
              </div>
              <div className="pagination-side">
                <Pagination products={products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
