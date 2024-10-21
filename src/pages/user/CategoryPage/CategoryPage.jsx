import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CategoryPage.module.scss";
import Pagination from "../../../components/Pagination/Pagination";
import SearchBar from "../../../components/Search/SearchBar";
import { useState } from "react";
import { queries } from "../../../products";
import ProductCard from "../../../components/common/ProductCard/ProductCard";
import FilterSidebar from "../../../components/FilteredProducts/FilterSideBar";
import { useGetProductsQuery } from "../../../redux/sercives/productApi";
import { useEffect } from "react";

const CategoryPage = () => {
  const { data = [], isLoading, isError, isSuccess, error } = useGetProductsQuery();
  const [products, setProducts] = useState([]);
  console.log({ products });

  useEffect(() => {
    setProducts(data)
    console.log({ data });
  }, [data])


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

  const [currentPage, setCurrentPage] = useState(0); // Səhifə nömrəsi
  const itemsPerPage = 21; // Hər səhifədə göstərilən məhsul sayı

  const handleSearch = data => {
    setFilterQueries({ ...filterQueries, query: data });
  };

  const handleSorting = sortType => {
    setFilterQueries(prev => ({ ...prev, sortType }));
  };

  const handleFilter = (itemKey, filterKey) => {
    setFilterQueries(prev => {
      const currentFilter = prev[filterKey];
      if (currentFilter.includes(itemKey)) {
        return { ...prev, [filterKey]: currentFilter.filter(key => key !== itemKey) };
      } else {
        return { ...prev, [filterKey]: [...currentFilter, itemKey] };
      }
    });
  };

  const handlePageClick = event => {
    setCurrentPage(event.selected); // Səhifə nömrəsini yenilə
    window.scrollTo({ top: 0, behavior: "smooth" }); // Səhifə nömrəsi dəyişdikdə yuxarıya fırlat
  };

  const handlePrice = data => {
    setFilterQueries({ ...filterQueries, price: data });
  };

  // const filteredProducts = products.filter(prod => {
  //   const matchesQuery = prod.name.toLocaleLowerCase().includes(filterQueries.query.toLocaleLowerCase());
  //   const matchesPrice = prod.price >= filterQueries.price.min && prod.price <= filterQueries.price.max;
  //   const matchesCategory = filterQueries.category.length === 0 || filterQueries.category.includes(prod.category);
  //   const matchesBrand = filterQueries.brand.length === 0 || filterQueries.brand.includes(prod.brand);
  //   const matchesProcessor = filterQueries.processor.length === 0 || filterQueries.processor.includes(prod.processor);

  //   return matchesQuery && matchesPrice && matchesCategory && matchesBrand && matchesProcessor;
  // });
  // const filteredProducts = products

  // console.log({ filteredProducts });


  // let sortedProducts = [];
  // if (filteredProducts.length > 0 || filterQueries.sortType) {
  //   sortedProducts = filteredProducts.sort((a, b) => {
  //     switch (filterQueries.sortType) {
  //       case "priceAsc":
  //         return a.price - b.price;
  //       case "priceDesc":
  //         return b.price - a.price;
  //       case "nameAsc":
  //         return a.name.localeCompare(b.name);
  //       case "nameDesc":
  //         return b.name.localeCompare(a.name);
  //       case "ratingAsc":
  //         return a.rating - b.rating;
  //       case "ratingDesc":
  //         return b.rating - a.rating;
  //       default:
  //         return 0;
  //     }
  //   });
  // }

  // Mövcud səhifə üçün məhsulları hesablayın
  // const offset = currentPage * itemsPerPage;
  // const currentProducts = sortedProducts.slice(offset, offset + itemsPerPage); // Hər səhifədə göstəriləcək məhsullar
  // console.log({ currentProducts, sortedProducts });

  return (
    <section className="pc">
      <div className={styles.pc_content}>
        <div className="row mb-4" style={{ marginLeft: "0px", marginRight: "0px" }}>
          <SearchBar filteredProducts={products} sortedProducts={products} handleSearch={handleSearch} handleSorting={handleSorting} />
        </div>
        <div className="container">
          <div className={`row ${styles.pc__bottom}`}>
            <div className="filter-side col-lg-3">
              <FilterSidebar data={queries} handleFilter={handleFilter} handlePrice={handlePrice} />
            </div>
            <div className="product-side col-lg-9">
              <div className={styles.pc_section}>
                <div className="d-flex flex-wrap" style={{ gap: "30px" }}>
                  {products.length === 0 ? <div className={styles.noProductsMessage}>There are no products.</div> : products.map(card => <ProductCard key={card.id} data={card} />)}
                </div>
              </div>
              <div className="pagination-side">
                <Pagination
                  products={products}
                  itemsPerPage={itemsPerPage}
                  handlePageClick={handlePageClick}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
