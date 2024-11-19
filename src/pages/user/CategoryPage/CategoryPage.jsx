import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CategoryPage.module.scss";
import Pagination from "../../../components/Pagination/Pagination";
import SearchBar from "../../../components/Search/SearchBar";
import { useState, useEffect } from "react";
// import { products, queries } from "../../../products";
import ProductCard from "../../../components/common/ProductCard/ProductCard";
import FilterSidebar from "../../../components/FilteredProducts/FilterSideBar";
import { useGetFavoritesQuery } from "../../../redux/sercives/favoriteApi";
import { useFilterProductsBySpecsQuery, useGetProductsByCategoryNameQuery, useGetProductsQuery } from "../../../redux/sercives/productApi";
import { useParams } from "react-router-dom";
import { useGetFilterNameWithValuesQuery } from "../../../redux/sercives/productApi";

const CategoryPage = () => {
  const { category } = useParams();

  const { data, error, isLoading } = useFilterProductsBySpecsQuery({
    categoryName: category,
  });
  const { data: favoriteData, refetch: refetchFavorites } = useGetFavoritesQuery();
  const favoriteProductIds = favoriteData ? favoriteData.map((fav) => fav.id) : [];

  const { data: queries } = useGetFilterNameWithValuesQuery(category); // Use the query hook

  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 10000,
  })
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
    storage: [],
  });


  const [test, setTest] = useState({});
  const handleFilterItem = (key, value) => {
    let arr = test[key];
    if (arr.includes(value)) {
      arr = arr.filter(item => item !== value);
      console.log({ arr });

    } else {
      arr.push(value);
    }
    setTest({ ...test, [key]: arr });

  }

  useEffect(() => {
    if (queries) {
      const temp = {};
      for (let query in queries) {
        temp[query] = [];
      }
      setTest(temp);
    }
  }, [queries]);



  const [currentPage, setCurrentPage] = useState(0); // Səhifə nömrəsi
  const itemsPerPage = 21; // Hər səhifədə göstərilən məhsul sayı

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

      // If the filter already exists for this key, toggle its selection.
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
    setPriceRange(data)
  };

  const filteredProducts = data?.filter(prod => {
    const matchesQuery = prod.name.toLocaleLowerCase().includes(filterQueries.query.toLocaleLowerCase());
    const priceRangeQuery = prod.price >= priceRange.min && prod.price <= priceRange.max
    let matchFilter = true;
    for (let i in test) {
      if (test[i].length > 0) {
        matchFilter = test[i].some(val => {
          // console.log(prod.specifications[i] === val);
          console.log(prod.specifications[i], { val });
          console.log(prod.specifications[i] === val);

          return prod.specifications[i] === val;
        });
        if (!matchFilter) break;
      }
      // Ensure all values match
      // Break early if any filter doesn't match
    }


    return matchesQuery && matchFilter && priceRangeQuery;
  });

  let sortedProducts = [];
  if (filteredProducts?.length > 0 || filterQueries?.sortType) {
    sortedProducts = filteredProducts.sort((a, b) => {
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

  // Mövcud səhifə üçün məhsulları hesablayın
  const offset = currentPage * itemsPerPage;
  const currentProducts = sortedProducts.slice(offset, offset + itemsPerPage); // Hər səhifədə göstəriləcək məhsullar

  return (
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
                  {currentProducts.length === 0 ? <div className={styles.noProductsMessage}>There are no products.</div> : currentProducts.map(card => <ProductCard key={card.id} data={card}
                    favoriteProductIds={favoriteProductIds}
                    refetchFavorites={refetchFavorites} />)}
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
  );
};

export default CategoryPage;