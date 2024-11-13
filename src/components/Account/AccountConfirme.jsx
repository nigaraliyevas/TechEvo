import style from './accountConfirme.module.scss'
import check from '../../assets/images/account/accountIcon/check.svg'
const AccountConfirme = ({setConfirm}) => {
  return (
    <div onClick={()=>setConfirm(false)} className={style.overlay}>
    <div className={style.confirme_container}>
     <img src={check} alt="check" />
     <p className={style.confirme_text}>Məlumatlarınız təsdiqləndi !</p>
    </div>

  </div>
  )
}

export default AccountConfirme