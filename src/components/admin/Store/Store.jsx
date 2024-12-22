import { useState } from "react";
import styles from "./Store.module.scss";
// import { Range } from "react-range";

import { useGetAllProductsQuery } from "../../../redux/sercives/productApi";
import { Link } from "react-router-dom";

const FilterItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.filter_bar_item}>
      <div className="d-flex justify-content-between" style={{ padding: "12px", cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img
          src="/src/assets/images/admin/Dashboard/arrow-down.svg"
          alt=""
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </div>
      {isOpen && <div style={{ padding: "12px" }}>{children}</div>}
    </div>
  );
};

const Store = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([200, 10000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const { data: products, error, isLoading } = useGetAllProductsQuery();

  const data = [
    { title: "Ümumi məhsul", value: 640 },
    { title: "PC", value: 120 },
    { title: "Laptop", value: 230 },
    { title: "Aksesuar", value: 230 },
  ];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  const filteredProducts = products.filter(product => {
    const isWithinPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const isCategoryMatch = selectedCategories.length ? selectedCategories.includes(product.categoryName) : true;
    const isStatusMatch = selectedStatus.length ? selectedStatus.includes(product.isStock ? "Stokdadır" : "Bitib") : true;

    return isWithinPriceRange && isCategoryMatch && isStatusMatch;
  });

  const toggleCategory = category => {
    setSelectedCategories(prev => (prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]));
  };

  const toggleStatus = status => {
    setSelectedStatus(prev => (prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]));
  };

  const handleRangeChange = values => {
    setPriceRange(values);
  };

  return (
    <div className={styles.store}>
      <div className={styles.stats_container}>
        <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: "16px" }}>
          <h2 className={styles.stock_header}>Stok</h2>
          <div className={styles.create_btn}>
            <Link to="/admin/create">Əlavə et</Link>
            <img src="/src/assets/images/admin/Dashboard/add-circle.svg" alt="" />
          </div>
        </div>
        <div className={styles.stats}>
          {data.map((item, index) => (
            <div key={index} className={styles.statCard}>
              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.stock_header}>Son əlavə olunanlar</h2>
        <table className={styles.table} style={{ height: "381px", overflowY: "scroll", display: "block" }}>
          <thead style={{ width: "100%" }}>
            <tr style={{ position: "sticky", top: " 0", background: "#161A1E" }}>
              <th style={{ width: "25%" }}>Məhsul</th>
              <th style={{ width: "15%" }}>Tarix</th>
              <th style={{ width: "20%" }}>Qiymət</th>
              <th style={{ width: "10%" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 10).map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>will be added</td>
                <td>{product.price}</td>
                <td style={{ color: `${product.isStock ? "green" : "red"}` }}>{product.isStock ? "Stokdadır" : "Bitib"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.section}>
        <div className={styles.filter}>
          <div className={`d-flex justify-content-between w-100`}>
            <h3 className={styles.stock_header}>Məhsullar</h3>
            <div className={styles.filter_bar}>
              <span>Filter</span>
              <img src="/src/assets/images/FilterSide/filterImg.svg" alt="" onClick={toggleFilter} />
              {filterOpen && (
                <div className={styles.filter_bar_dropdown}>
                  <FilterItem title="Qiymət">
                    <div className={styles.rangeContainer}>
                      <div className={`${styles.rangeValues} d-flex justify-content-between`}>
                        <span style={{ fontSize: "18px" }}>{priceRange[0].toLocaleString()} ₼</span>
                        <span style={{ fontSize: "18px" }}>{priceRange[1].toLocaleString()} ₼</span>
                      </div>
                      <Range
                        step={100}
                        min={200}
                        max={10000}
                        values={priceRange}
                        onChange={handleRangeChange}
                        renderTrack={({ props, children }) => (
                          <div
                            {...props}
                            style={{
                              height: "6px",
                              background: "#ccc",
                              width: "100%",
                              marginTop: "12px",
                            }}
                          >
                            {children}
                          </div>
                        )}
                        renderThumb={({ props }) => (
                          <div
                            {...props}
                            style={{
                              height: "16px",
                              width: "16px",
                              backgroundColor: "#000",
                              borderRadius: "50%",
                              transform: "translate(201px, 20px)",
                              background: "white",
                            }}
                          />
                        )}
                      />
                    </div>
                  </FilterItem>

                  <FilterItem title="Kateqoriya">
                    <div>
                      {["PC", "Laptop", "Keyboard", "Mouse", "Network Card", "Motherboard"].map(category => (
                        <label key={category} style={{ display: "block" }}>
                          <input className={styles.checkbox} type="checkbox" onChange={() => toggleCategory(category)} checked={selectedCategories.includes(category)} /> {category}
                        </label>
                      ))}
                    </div>
                  </FilterItem>

                  <FilterItem title="Status">
                    <div>
                      {["Stokdadır", "Bitib"].map(status => (
                        <label key={status} style={{ display: "block" }}>
                          <input className={styles.checkbox} type="checkbox" onChange={() => toggleStatus(status)} checked={selectedStatus.includes(status)} /> {status}
                        </label>
                      ))}
                    </div>
                  </FilterItem>
                </div>
              )}
            </div>
          </div>
        </div>
        <table className={styles.table} style={{ height: "381px", overflowY: "scroll", display: "block" }}>
          <thead>
            <tr style={{ position: "sticky", top: " 0", background: "#161A1E" }}>
              <th style={{ width: "25%" }}>Məhsul</th>
              <th style={{ width: "20%" }}>Kateqoriya</th>
              <th style={{ width: "15%" }}>Tarix</th>
              <th style={{ width: "20%" }}>Qiymət</th>
              <th style={{ width: "10%" }}>Şəkil</th>
              <th style={{ width: "10%" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.categoryName}</td>
                <td>will be added</td>
                <td>{product.price.toLocaleString()} ₼</td>
                <td>{product.imageUrl && product.imageUrl.length ? <img src={product.imageUrl[0]} alt={product.name} style={{ width: "50px", height: "50px" }} /> : "N/A"}</td>
                <td style={{ color: `${product.isStock ? "green" : "red"}` }}>{product.isStock ? "Stokdadır" : "Bitib"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Store;
