import React from 'react'
// styles
import styles from "../Delivery/Delivery.module.scss";
// images
import editIcon from "../../../assets/images/admin/Delivery/edit.svg"
import trashIcon from "../../../assets/images/admin/Delivery/trash.svg"

const Repair = () => {
  return (
    <div>
      <div className={styles.serviceCont}>
          <div className={styles.serviceHead}>Təmir</div>
          <table>
            <thead>
              <tr>
                <th className={styles.tHead}>Header</th>
                <th>Təsvir</th>
                <th>Şəkil</th>
                <th>Redaktə</th>
              </tr>
            </thead>
            <tbody>
                {/* this tr below must be mapped */}
              <tr>
                <td>Texniki Çətinlikləriniz Var? Biz Həll Edirik!</td>
                <td>Tech-Evo-da kompüterlərinizin düzgün işləməsi üçün bir sıra xidmətlər...</td>
                <td></td>
                <td className={styles.edit}>
                  <div className={styles.imgCont}>
                    <img src={editIcon} alt="edit icon" />
                  </div>
                  <div className={styles.imgCont}>
                    <img src={trashIcon} alt="trash icon" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Repair
