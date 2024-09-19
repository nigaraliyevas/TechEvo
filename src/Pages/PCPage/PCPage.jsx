import "bootstrap/dist/css/bootstrap.min.css";
import CardPC from "../../components/CardPC/CardPC";
import styles from "./PCPage.module.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../../components/search/SearchBar";
const PCPage = () => {
  const { cards } = useSelector((state) => state.pcCard);
  const [products,setProducts] = useState(cards);
  useEffect(()=>{
    setProducts(products.filter(item => item.price === 250));
  },[cards]);

  
  return (
    <section className="pc">
      <div className="container">
        <div className={styles.pc_content}>
         
          <div className="row">
            {/* <div className="search-page col-lg-12 d-flex justify-content-between">
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
            </div> */}
          <SearchBar/>
          </div>
          <div className="row mb-4">
            <div className="filter-side col-lg-3"></div>
            <div className="product-side col-lg-9">
              <div className={styles.pc_section}>
                <div className="d-flex flex-wrap gap-2">
                  <CardPC cards={products} />
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-side"></div>
        </div>
      </div>
    </section>
  );
};

export default PCPage;
