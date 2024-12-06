import React from 'react'
// styles
import styles from "../Delivery/Delivery.module.scss";
// images
import editIcon from "../../../assets/images/admin/Delivery/edit.svg"
import trashIcon from "../../../assets/images/admin/Delivery/trash.svg"

const Credit = () => {
    return (
        <div className={styles.serviceCont}>
          <div className={styles.serviceHead}>Daxili kredit</div>
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
                <td>Rahat alış-veriş seçimləri</td>
                <td>Tech-Evo olaraq sizə rahat alış-veriş təklif edirik.</td>
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
      );
}

export default Credit
