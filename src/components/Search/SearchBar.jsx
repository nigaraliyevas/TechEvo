import { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import SearchIcon from "../../assets/images/Search/search.svg"; // Make sure the asset path is correct
import DropDownIcon from "../../assets/images/Search/dropdownIcon.svg";
import DropUpIcon from "../../assets/images/Search/dropupIcon.svg";

const SearchBar = ({handleSearch, handleSorting, sortedProducts}) => {
  const [showOrder, setShowOrder] = useState(false);

  
  const [query, setQuery] = useState("");
  const handleQuery = ({ target }) => { 
    setQuery(target.value)
    handleSearch(target.value);
  };



  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showOrder) {
        setShowOrder(false);
      }
    };

    if (showOrder) {
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup the event listener when component unmounts or showOrder changes
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showOrder]);

  const handleOrder = (e) => {
    e.stopPropagation(); // Prevent closing when clicking on the order menu itself
    setShowOrder(!showOrder);
  };


  return (
    <div className={styles.searchBarContainer}>
      <section className={styles.section}>
        <div className={styles.pc}>PC</div>
        <div className={`${styles.searchContainer} ${showOrder && styles.pointerNone}`}>
          <input value={query} onInput={handleQuery} className={styles.searchInput} type="text" placeholder="Axtarış" />
          <div className={styles.searchIconContainer}>
            <img className={styles.searchIcon} src={SearchIcon} alt="Search Icon" />
          </div>



          <div className={styles.searchAbsContainer}>
            <div className={styles.prodHeader}>Məhsullar</div>
            <div className={styles.prodRecoms}>

                {/* mapping sortedProducts here */}
                <div className={styles.prodCont}>
                  <div className={styles.imgAndTitle}>
                    <div className={styles.prodImg}><img src="" alt="" /></div>
                    <div className={styles.prodTitle}>Lenovo IdeaPad 1 15ALC7 82R400NYRK</div>
                  </div>
                  <div className={styles.price}>2500 AZN</div>
                </div>
                <div className={styles.prodCont}>
                  <div className={styles.imgAndTitle}>
                    <div className={styles.prodImg}><img src="" alt="" /></div>
                    <div className={styles.prodTitle}>Lenovo IdeaPad 1 15ALC7 82R400NYRK</div>
                  </div>
                  <div className={styles.price}>2500 AZN</div>
                </div>
                <div className={styles.prodCont}>
                  <div className={styles.imgAndTitle}>
                    <div className={styles.prodImg}><img src="" alt="" /></div>
                    <div className={styles.prodTitle}>Lenovo IdeaPad 1 15ALC7 82R400NYRK</div>
                  </div>
                  <div className={styles.price}>2500 AZN</div>
                </div>

            </div>
            <div className={styles.showAllBtn}>Bütün axtarış nəticələri (150)</div>
          </div>


          
        </div>
        <div className={styles.orderContainer}>
          <div onClick={handleOrder} className={styles.ordr}>
            <div className={styles.orderText}>Sıralama</div>
            <div className={styles.dropContainer}>
              <img className={styles.dropImg} src={showOrder ? DropUpIcon : DropDownIcon} alt="DropDown Icon" />
            </div>
          </div>
          {showOrder && (
            <>
              <div className={styles.overlay} onClick={() => setShowOrder(false)}></div>
              <div className={styles.orderMenu}>
                <div>
                  <div className={styles.orderHeader}>Qiymət</div>
                  <ul className={styles.orderUl}>
                    <li onClick={() => handleSorting("priceAsc")}>Azdan-çoxa</li>
                    <li onClick={() => handleSorting("priceDesc")}>Çoxdan-aza</li>
                  </ul>
                </div>
                <div>
                  <div className={styles.orderHeader}>Reytinq</div>
                  <ul className={styles.orderUl}>
                    <li onClick={() => handleSorting("ratingAsc")}>Aşağıdan-yuxarı</li>
                    <li onClick={() => handleSorting("ratingDesc")}>Yuxarıdan-aşağı</li>
                  </ul>
                </div>
                <div>
                  <div className={styles.orderHeader}>Brend</div>
                  <ul className={styles.orderUl}>
                    <li onClick={() => handleSorting("nameAsc")}>Brend adı (A-Z)</li>
                    <li onClick={() => handleSorting("nameDesc")}>Brend adı (Z-A)</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
