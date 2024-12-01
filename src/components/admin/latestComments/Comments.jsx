import React from "react";
// styles
import styles from "./Comments.module.scss";
import StarRating from "../../Rating/StarRating";

const Comments = () => {
  return (
    <div className={styles.comCont}>
      <h5 className={styles.comHead}>Son kommentlər</h5>
      {[1, 2].map((comment, index) => (
        <div key={index} className={styles.comment}>
          <div className={styles.commentOwner}>
            <div className={styles.commentOwnerLeft}>
              <div className={styles.commentOwnerPhotoCont}>
                <img
                  className={styles.commentOwnerPhotoImg}
                  src="https://i.pravatar.cc/50"
                  alt="comment owner profile photo"
                />
              </div>
              <div className={styles.commentOwnerNameAndDate}>
                <strong>Leyla Babayeva</strong>
                <p>Qeydiyyat tarixi: 09/25/2024</p>
              </div>
            </div>
            <div className={styles.commentOwnerRight}>
              <StarRating fontSize={"0.75rem"} value={5} />
            </div>
          </div>
          <p>
            I recently purchased the XYZ Laptop, and it's been a game-changer
            for my productivity. The performance is outstanding, thanks to the
            Intel i7 processor and 16GB RAM. Multitasking is a breeze, even with
            demanding applications.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
