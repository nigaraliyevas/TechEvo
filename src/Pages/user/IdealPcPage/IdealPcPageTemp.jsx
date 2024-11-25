import { useState } from "react";
import IndividualPc from "../../../components/IdealPc/IndividualPc";
import RedyProduct from "../../../components/IdealPc/RedyProduct";
import style from "./idealpc.module.scss";

const IdealPcPage = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = ()=>{
    setOpen(!open)
  }
  return (
    <div className={style.container}>
      <div className={style.idealPage_container}>
        <div className={style.idealPage_top}>
          <div onClick={handleOpen}  className={`${open?style.idealPage_title2:style.idealPage_title}`}>Hazır məhsul</div>
          <div onClick={handleOpen}className={`${open?style.idealPage_title:style.idealPage_title2}`}>Fərdiləşdirilmiş PC</div>
        </div>
        {open ? <RedyProduct /> : <IndividualPc />}
      </div>
    </div>
  );
};

export default IdealPcPage;
