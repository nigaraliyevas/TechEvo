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
    setFilterQueries((prevFilters) => {
      const isAlreadySelected = prevFilters[key].includes(data);
      
      return {
        ...prevFilters,
        [key]: isAlreadySelected 
                ? prevFilters[key].filter(item => item !== data) // Remove if already selected
                : [...prevFilters[key], data] // Add if not selected
      };
    });
  };
  

  const handlePrice = (data) => {
    setFilterQueries({ ...filterQueries, price: data });
  }
  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(filterQueries.query.toLowerCase());
    const matchesPrice = product.price >= filterQueries.price.min && product.price <= filterQueries.price.max;
    const matchesCategory = filterQueries.category.length === 0 || filterQueries.category.includes(product.category);
    const matchesBrand = filterQueries.brand.length === 0 || filterQueries.brand.includes(product.brand);
    const matchesProcessor = filterQueries.processor.length === 0 || filterQueries.processor.includes(product.processor);
    const matchesVideoCard = filterQueries.videoCard.length === 0 || filterQueries.videoCard.includes(product.videoCard);
    const matchesRam = filterQueries.ram.length === 0 || filterQueries.ram.includes(product.ram);
    const matchesStorage = filterQueries.storage.length === 0 || filterQueries.storage.includes(product.storage);
  
    return (
      matchesQuery &&
      matchesPrice &&
      matchesCategory &&
      matchesBrand &&
      matchesProcessor &&
      matchesVideoCard &&
      matchesRam &&
      matchesStorage
    );
  });
  
  
  console.log('Filter Queries:', filterQueries);
  console.log('Filtered Products:', filteredProducts);
  
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
                  {filteredProducts.length === 0 ? (
                    <div className={styles.noProductsMessage}>There are no products.</div>
                  ) : (
                    filteredProducts.map(card => (
                      <ProductCard key={card.id} data={card} />
                    ))
                  )}
                </div>
              </div>
              <div className="pagination-side">
                <Pagination products={filteredProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
