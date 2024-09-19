import React, { useState } from 'react'
import styles from './SearchBar.module.scss';
import SearchIcon from '../../../public/assets/images/Search/search.svg';
import DropDownIcon from '../../../public/assets/images/Search/dropdownIcon.svg';
import DropUpIcon from '../../../public/assets/images/Search/dropupIcon.svg';
import { useSelector } from 'react-redux';

const SearchBar = ({products, setProducts}) => {

    // const cards = products;
    // const {cards} = useSelector(state => state.pcCard)
    const [showOrder, setShowOrder] = useState(false);

    const handleOrder = () => {
        setShowOrder(!showOrder);
    }

    const sortAscending = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setProducts(sorted);
    }
    
    const sortDescending = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setProducts(sorted);
    }

    const sortAlphabeticallyAscending = () => {
      const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
      setProducts(sorted);
    }
  
    const sortAlphabeticallyDescending = () => {
        const sorted = [...products].sort((a, b) => b.name.localeCompare(a.name));
        setProducts(sorted);
    }
    



  return (
    <>
      <div className={styles.searchBarContainer}>
        <section className={styles.section}>
          <div className={styles.pc}>PC</div>
          <div className={styles.searchContainer}>
            <input
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
            {showOrder ? (
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
                    <li>Aşağıdan-yuxarı</li>
                    <li>Yuxarıdan-aşağı</li>
                  </ul>
                </div>
                <div>
                  <div className={styles.orderHeader}>Brend</div>
                  <ul className={styles.orderUl}>
                    <li onClick={sortAlphabeticallyAscending}>Brend adı (A-Z)</li>
                    <li onClick={sortAlphabeticallyDescending}>Brend adı (Z-A)</li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </>
  );
}

export default SearchBar;
