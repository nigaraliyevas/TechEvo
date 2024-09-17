import React from 'react'
import styles from './SearchBar.module.scss';
import SearchIcon from '../../../public/assets/images/Search/search.svg';
import DropDownIcon from '../../../public/assets/images/Search/dropdownIcon.svg';
import DropUpIcon from '../../../public/assets/images/Search/dropupIcon.svg';

const SearchBar = () => {
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
                <div className={`${styles.dropdownContainer} ${styles.dropContainer}`}>
                    <img 
                        className={`${styles.dropdownImg} ${styles.dropImg}`}
                        src={DropDownIcon} 
                        alt="DropDown Icon" 
                    />
                </div>
                <div className={`${styles.dropupContainer} ${styles.dropContainer}`}>
                    <img 
                        className={`${styles.dropupImg} ${styles.dropImg}`}
                        src={DropUpIcon} 
                        alt="DropUp Icon" 
                    />
                </div>
                <div className={styles.orderMenu}>
                    <div>Sıralama</div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}

export default SearchBar;
