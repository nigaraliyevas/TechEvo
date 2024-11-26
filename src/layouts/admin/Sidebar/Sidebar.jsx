import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="col-12 col-md-3 col-lg-2 bg-dark text-white vh-100 p-3">
        <img src="/src/assets/images/HeaderPage/tech-evo-logo 1.png" alt="" />
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="" className="nav-link text-white">
              Baş lövhə
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="" className="nav-link text-white">
              Mağaza
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="" className="nav-link text-white">
              Sifarişlər
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="" className="nav-link text-white">
              Səhifələr
            </Link>
          </li>
          <li className="nav-item mt-auto">
            <Link to="" className="nav-link text-white">
              Parametrlər
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
