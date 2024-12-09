import styles from "./CreateProduct.module.scss";

const CreateProduct = () => {
  return (
    <div className={styles.productCatalog}>
      <h1 className={styles.product_header}>Məhsul kataloqu</h1>
      <form className={styles.form}>
        <div className="col-lg-6">
          {/* Header and Description */}
          <div className={styles.row}>
            <div className={styles.column}>
              <label>Header</label>
              <input type="text" placeholder="Header" />
            </div>
            <div className={styles.column} style={{ marginTop: "24px" }}>
              <label>Təsvir</label>
              <textarea placeholder="Təsvir"></textarea>
            </div>
          </div>
          {/* Specifications */}
          <div>
            <label>Xüsusiyyətlər</label>
            <div className={styles.specifications}>
              {["Prosesor", "Videokart", "Operativ yaddaş", "HDD", "SSD", "Ana plata", "Qidalanma bloku", "Keys"].map((spec, index) => (
                <div key={index} className={styles.specField}>
                  <label>{spec}</label>
                  <select>
                    <option value="">Seç</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/* Images */}
          <div className={styles.row}>
            <div className={styles.images}>
              <label>Şəkillər</label>
              <div className={styles.imageGrid}>
                <div className={styles.imageBox}>şəkil 1</div>
                <div className={styles.imageBox}>şəkil 2</div>
                <div className={styles.imageBox}>şəkil 3</div>
                <div className={styles.imageBox}>şəkil 4</div>
              </div>
              <p>Şəkil əlavə et və ya dəyiş</p>
            </div>
          </div>

          {/* Price and Additional Info */}
          <div className={styles.row}>
            <div className={styles.column}>
              <label>Qiymət</label>
              <input type="number" placeholder="AZN" />
            </div>
            <div className={styles.column}>
              <label>Kredit</label>
              <input type="text" placeholder="BirKarta əlavə et" />
            </div>
            <div className={styles.column}>
              <label>Müddət</label>
              <input type="text" placeholder="12 ay x 150 AZN" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>
              <label>Zəmanət</label>
              <input type="text" placeholder="1 il zəmanət" />
            </div>
            <div className={styles.column}>
              <label>Çatdırılma</label>
              <input type="text" placeholder="Pulsuz çatdırılma" />
            </div>
          </div>
          {/* Buttons */}
          <div className={styles.actions}>
            <button type="button" className={styles.cancel}>
              Cancel
            </button>
            <button type="submit" className={styles.save}>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
