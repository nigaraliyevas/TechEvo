import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PCPage.module.scss";
const PCPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="search-page col-lg-12 col-md-6 mb-4">
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        <div className="row">
          <div className="filter-side col-lg-3 col-md-6 mb-4"></div>
          <div className="product-side col-lg-9 col-md-6 mb-4"></div>
        </div>
        <div className="pagination-side"></div>
      </div>
    </>
  );
};

export default PCPage;
