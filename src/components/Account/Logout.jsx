import React from 'react'
import style from './logout.module.scss'
import { useNavigate } from 'react-router-dom'
const Logout = ({setExist,setConfirm}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setExist(false)
  };
  return (
    <div>
  <div className={style.overlay}>
      <div className={style.account_out}>
        <div className={style.account_out_quetion}>
          Çıxmaq istədiyinizə əminsinizmi?
        </div>
        <div>
          <button onClick={handleClick} className={style.account_out_yes}>Bəli</button>
          <button onClick={()=>setExist(false)} className={style.account_out_no}>Xeyr</button>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Logout