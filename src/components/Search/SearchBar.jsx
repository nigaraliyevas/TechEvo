import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import SearchIcon from "../../../public/assets/images/Search/search.svg";
import DropDownIcon from "../../../public/assets/images/Search/dropdownIcon.svg";
import DropUpIcon from "../../../public/assets/images/Search/dropupIcon.svg";

const SearchBar = ({ products, setProducts }) => {
  const [showOrder, setShowOrder] = useState(false);
  const [originalProducts, setOriginalProducts] = useState(products);
  const [isFound, setIsFound] = useState(true);

  const handleOrder = () => {
    setShowOrder(!showOrder);
  };

  const sortAscending = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  const sortDescending = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  const sortAlphabeticallyAscending = () => {
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sorted);
  };

  const sortAlphabeticallyDescending = () => {
    const sorted = [...products].sort((a, b) => b.name.localeCompare(a.name));
    setProducts(sorted);
  };

  const sortRateAscending = () => {
    const sorted = [...products].sort((a, b) => a.rate - b.rate);
    setProducts(sorted);
  };

  const sortRateDescending = () => {
    const sorted = [...products].sort((a, b) => b.rate - a.rate);
    setProducts(sorted);
  };

  const findProducts = (e) => {
    const searchValue = e.target.value.toLowerCase();
    console.log(searchValue);

    if (searchValue === "") {
      setProducts(originalProducts);
      setIsFound(true);
      return;
    }

    const filteredProducts = originalProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchValue)
    );

    setProducts(filteredProducts);
    setIsFound(filteredProducts.length > 0);

    if (filteredProducts.length === 0 && searchValue) {
      console.log("Not Found");
      setIsFound(false);
    }
  };

  return (
    <>
      <div className={styles.searchBarContainer}>
        <section className={styles.section}>
          <div className={styles.pc}>PC</div>
          <div className={styles.searchContainer}>
            <input
              onChange={findProducts}
              className={styles.searchInput}
              type="text"
              placeholder="Axtarış"
            />
            <div className={styles.searchIconContainer}>
              <img
                className={styles.searchIcon}
                src={SearchIcon}
                alt="Search Icon"
              />
            </div>
          </div>
          <div className={styles.orderContainer}>
            <div onClick={handleOrder} className={styles.ordr}>
              <div className={styles.orderText}>Sıralama</div>
              <div className={styles.dropContainer}>
                <img
                  className={styles.dropImg}
                  src={showOrder ? DropUpIcon : DropDownIcon}
                  alt="DropDown Icon"
                />
              </div>
            </div>
            {showOrder && (
              <>
                <div className={styles.overlay}></div>
                <div className={styles.orderMenu}>
                  <div>
                    <div className={styles.orderHeader}>Qiymət</div>
                    <ul className={styles.orderUl}>
                      <li onClick={sortAscending}>Azdan-çoxa</li>
                      <li onClick={sortDescending}>Çoxdan-aza</li>
                    </ul>
                  </div>
                  <div>
                    <div className={styles.orderHeader}>Reytinq</div>
                    <ul className={styles.orderUl}>
                      <li onClick={sortRateAscending}>Aşağıdan-yuxarı</li>
                      <li onClick={sortRateDescending}>Yuxarıdan-aşağı</li>
                    </ul>
                  </div>
                  <div>
                    <div className={styles.orderHeader}>Brend</div>
                    <ul className={styles.orderUl}>
                      <li onClick={sortAlphabeticallyAscending}>
                        Brend adı (A-Z)
                      </li>
                      <li onClick={sortAlphabeticallyDescending}>
                        Brend adı (Z-A)
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchBar;
