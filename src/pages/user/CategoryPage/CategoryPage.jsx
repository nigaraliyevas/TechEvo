import "bootstrap/dist/css/bootstrap.min.css";
// import CardPC from "../../components/HomePageSections/CardPC/CardPC";
// import CardPC from "../../components/CardPC/CardPC";
import styles from "./CategoryPage.module.scss";
import Pagination from "../../../components/Pagination/Pagination";
import SearchBar from "../../../components/Search/SearchBar";
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

  const handleSorting = (sortType) => {
    setFilterQueries((prev) => ({ ...prev, sortType }));
  }

  

  const handleFilter = (data, key) => {
    setFilterQueries({ ...filterQueries, [key]: data });
  }


  const handlePrice = (data) => {
    setFilterQueries({ ...filterQueries, price: data });
  }

  const filteredProducts = products.filter((prod) => {
    // Apply search query filter
    const matchesQuery = prod.name.toLowerCase().includes(filterQueries.query.toLowerCase());
  
    // Apply price filter
    const matchesPrice = prod.price >= filterQueries.price.min && prod.price <= filterQueries.price.max;
  
    // Apply other filters like category, brand, processor, etc.
    const matchesCategory = filterQueries.category.length === 0 || filterQueries.category.includes(prod.category);
    const matchesBrand = filterQueries.brand.length === 0 || filterQueries.brand.includes(prod.brand);
    const matchesProcessor = filterQueries.processor.length === 0 || filterQueries.processor.includes(prod.processor);
  
    return matchesQuery && matchesPrice && matchesCategory && matchesBrand && matchesProcessor;
  });

  
  const sortedProducts = (filteredProducts.length > 0 ? filteredProducts : products).sort((a, b) => {
    switch (filterQueries.sortType) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "nameAsc":
        return a.name.localeCompare(b.name);
      case "nameDesc":
        return b.name.localeCompare(a.name);
      case "ratingAsc":
        return a.rating - b.rating;
      case "ratingDesc":
        return b.rating - a.rating;
      default:
        return 0; // No sorting if sortType is not set
    }
  })

  return (
    <section className="pc">
        <div className={styles.pc_content}>
          <div className="row mb-4" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <SearchBar handleSearch={handleSearch} handleSorting = {handleSorting}/>
          </div>
          <div className="container">
            <div className={`row ${styles.pc__bottom}`}>
              <div className="filter-side col-lg-3">
                <FilterSidebar data={queries} handleFilter={handleFilter} handlePrice={handlePrice} />
              </div>
              <div className="product-side col-lg-9">
                <div className={styles.pc_section}>
                  <div className="d-flex flex-wrap" style={{ gap: "30px" }}>
                    {(sortedProducts.length === 0 || filteredProducts.length === 0) ? (
                      <div className={styles.noProductsMessage}>There are no products.</div>
                    ) : (
                      sortedProducts.map(card => (
                        <ProductCard key={card.id} data={card} />
                      ))
                    )}
                  </div>
                </div>
                <div className="pagination-side">
                  <Pagination products={sortedProducts} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default CategoryPage;
