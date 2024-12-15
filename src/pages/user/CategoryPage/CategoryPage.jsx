import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CategoryPage.module.scss";
import Pagination from "../../../components/Pagination/Pagination";
import SearchBar from "../../../components/Search/SearchBar";
import { useState, useEffect } from "react";
import ProductCard from "../../../components/common/ProductCard/ProductCard";
import FilterSidebar from "../../../components/FilteredProducts/FilterSideBar";
import { useGetFavoritesQuery } from "../../../redux/sercives/favoriteApi";
import { useFilterProductsBySpecsQuery, useGetFilterNameWithValuesQuery } from "../../../redux/sercives/productApi";
import { useParams } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";
import filterImg from "../../../assets/images/FilterSide/filterImg.svg";
//import style from "../../../components/Search/SearchBar.module.scss";

const CategoryPage = () => {
  const { category } = useParams();
  const { data, error, isLoading } = useFilterProductsBySpecsQuery({ categoryName: category });
  const { data: favoriteData, refetch: refetchFavorites } = useGetFavoritesQuery();
  const favoriteProductIds = favoriteData ? favoriteData.map(fav => fav.id) : [];
  const [showFilter, setShowFilter] = useState(false);
  const { data: queries } = useGetFilterNameWithValuesQuery(category);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Mövcud vəziyyəti tərs çevirir
  };

  const isMobile = useIsMobile();
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [filterQueries, setFilterQueries] = useState({
    query: "",
    price: { min: 0, max: 2000 },
    category: [],
    brand: [],
    processor: [],
    videoCard: [],
    ram: [],
    storage: [],
  });
  const [test, setTest] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 21;

  useEffect(() => {
    if (queries) {
      const temp = {};
      for (let query in queries) {
        temp[query] = [];
      }
      setTest(temp);
    }
  }, [queries]);

  const handleFilterItem = (key, value) => {
    let arr = test[key] || [];
    if (arr.includes(value)) {
      arr = arr.filter(item => item !== value);
    } else {
      arr.push(value);
    }
    setTest({ ...test, [key]: arr });
  };

  const handleSearch = data => {
    setFilterQueries({ ...filterQueries, query: data });
  };

  const handleSorting = sortType => {
    setFilterQueries(prev => ({ ...prev, sortType }));
  };

  const [filters, setFilters] = useState({});

  const handleFilter = (key, value) => {
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };

      if (updatedFilters[key]?.includes(value)) {
        updatedFilters[key] = updatedFilters[key].filter(item => item !== value);
      } else {
        updatedFilters[key] = [...(updatedFilters[key] || []), value];
      }

      return updatedFilters;
    });
  };

  const handlePageClick = event => {
    setCurrentPage(event.selected); // Səhifə nömrəsini yenilə
    window.scrollTo({ top: 0, behavior: "smooth" }); // Səhifə nömrəsi dəyişdikdə yuxarıya fırlat
  };

  const handlePrice = data => {
    setPriceRange(data);
  };

  const filteredProducts = data?.filter(prod => {
    const matchesQuery = prod.name.toLocaleLowerCase().includes(filterQueries.query.toLocaleLowerCase());
    const priceRangeQuery = prod.price >= priceRange.min && prod.price <= priceRange.max;
    let matchFilter = true;

    for (let i in test) {
      if (test[i].length > 0) {
        matchFilter = test[i].some(val => prod.specifications[i] === val);
        if (!matchFilter) break;
      }
    }

    return matchesQuery && matchFilter && priceRangeQuery;
  });

  let sortedProducts = [];
  if (filteredProducts?.length > 0 || filterQueries?.sortType) {
    sortedProducts = filteredProducts;
    filteredProducts.sort((a, b) => {
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
          return 0;
      }
    });
  }

  const offset = currentPage * itemsPerPage;
  const currentProducts = sortedProducts.slice(offset, offset + itemsPerPage);

  return (
    <div className={styles.mobile_content}>
      {isMobile ? (
        <>
          <div className={styles.searchBarContainer}>
            <div style={{ position: "relative" }}>
              <p
                style={{
                  position: "absolute",
                  top: "105px",
                  zIndex: 9999,
                  color: "white",
                  fontSize: "20px",
                  left: "16px",
                }}
              >
                PC
              </p>
            </div>
            <SearchBar filteredProducts={filteredProducts} sortedProducts={sortedProducts} handleSearch={handleSearch} handleSorting={handleSorting} />
          </div>
          <div className={`${styles.productContainer} px-3`}>
            <button
              className={styles.filterButton}
              style={{
                width: "110px",
                height: "40px",
                backgroundColor: "#323437",
                color: "#BFBFBF",
                border: "none",
                marginBottom: "16px",
                borderRadius: "2px",
              }}
              onClick={toggleSidebar}
            >
              <div className={styles.filterContainer}>
                <div>
                  <p>Filter</p>
                </div>
                <div className={styles.filterImg}>
                  <img src={filterImg} alt="Filter Icon" />
                </div>
              </div>
            </button>

            {isSidebarOpen && (
              <div className={styles.filterSidebarOverlay} onClick={toggleSidebar}>
                <div className={styles.filterSidebar} onClick={e => e.stopPropagation()}>
                  <FilterSidebar handleFilterItem={handleFilterItem} queries={queries} handleFilter={handleFilter} handlePrice={handlePrice} />
                </div>
              </div>
            )}
            <div className={styles.product_side}>
              <div className={styles.productGrid}>
                {currentProducts.length === 0 ? (
                  <div className={styles.noProductsMessage}>There are no products.</div>
                ) : (
                  currentProducts.map(card => <ProductCard key={card.id} data={card} favoriteProductIds={favoriteProductIds} refetchFavorites={refetchFavorites} />)
                )}
              </div>
            </div>
            <Pagination products={sortedProducts} itemsPerPage={itemsPerPage} handlePageClick={handlePageClick} currentPage={currentPage} />
          </div>
        </>
      ) : (
        <section className="pc">
          <div className={styles.pc_content}>
            <div className="row mb-4" style={{ marginLeft: "0px", marginRight: "0px" }}>
              <SearchBar filteredProducts={filteredProducts} sortedProducts={sortedProducts} handleSearch={handleSearch} handleSorting={handleSorting} />
            </div>
            <div className="container">
              <div className={`row ${styles.pc__bottom}`}>
                <div className="filter-side col-lg-3">
                  <FilterSidebar handleFilterItem={handleFilterItem} queries={queries} handleFilter={handleFilter} handlePrice={handlePrice} />
                </div>
                <div className="product-side col-lg-9">
                  <div className={styles.pc_section}>
                    <div className="d-flex flex-wrap" style={{ gap: "30px" }}>
                      {currentProducts.length === 0 ? (
                        <div className={styles.noProductsMessage}>There are no products.</div>
                      ) : (
                        currentProducts.map(card => <ProductCard key={card.id} data={card} favoriteProductIds={favoriteProductIds} refetchFavorites={refetchFavorites} />)
                      )}
                    </div>
                  </div>
                  <div className="pagination-side">
                    <Pagination products={sortedProducts} itemsPerPage={itemsPerPage} handlePageClick={handlePageClick} currentPage={currentPage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CategoryPage;
