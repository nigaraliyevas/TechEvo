import RedyProduct from "../../../components/IdealPc/RedyProduct";
import style from "./idealpc.module.scss";

const IdealPcPage = () => {
  return (
    <div className={style.container}>
      <div className={style.idealPage_container}>
        <div className={style.idealPage_top}>
          <div className={style.idealPage_title}>Hazır məhsul</div>
          <div className={style.idealPage_title}>Fərdiləşdirilmiş PC</div>
        </div>
        <RedyProduct/>
      </div>
    </div>
  );
};

export default IdealPcPage;
