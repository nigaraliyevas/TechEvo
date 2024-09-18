import React, { useState } from 'react'
import styles from './SearchBar.module.scss';
import SearchIcon from '../../../public/assets/images/Search/search.svg';
import DropDownIcon from '../../../public/assets/images/Search/dropdownIcon.svg';
import DropUpIcon from '../../../public/assets/images/Search/dropupIcon.svg';

const SearchBar = () => {

    const [showOrder, setShowOrder] = useState(false);

    const handleOrder = () => {
        setShowOrder(!showOrder);
    }

  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
            <div className={styles.pc}>PC</div>
            <div className={styles.searchContainer}>
                <input 
                    className={styles.searchInput} 
                    type="text"
                    placeholder='Axtarış' 
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
                <div className={styles.orderText}>Sıralama</div>
                <div
                    onClick={handleOrder} 
                    className={styles.dropContainer}>
                    <img 
                        className={styles.dropImg}
                        src={showOrder ? DropUpIcon : DropDownIcon} 
                        alt="DropDown Icon" 
                    />
                </div>
                {showOrder ? 
                    <div className={styles.orderMenu}>
                        <div>
                            <div className={styles.orderHeader}>Qiymət</div>
                            <ul className={styles.orderUl}>
                                <li>Azdan-çoxa</li>
                                <li>Çoxdan-aza</li>
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
                                <li>Brend adı (A-Z)</li>
                                <li>Brend adı (Z-A)</li>
                            </ul>
                        </div>
                    </div> : null
                }
            </div>
        </section>
      </div>
    </>
  );
}

export default SearchBar;
