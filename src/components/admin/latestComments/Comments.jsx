// styles
import styles from "./Comments.module.scss";
import StarRating from "../../Rating/StarRating";
import { useGetAllCommentsQuery } from "../../../redux/sercives/reviewsApi";
// images
import noProfile from "../../../assets/images/admin/Dashboard/user.svg";

const Comments = () => {
  const { data, error, isLoading } = useGetAllCommentsQuery();
  return (
    <div className={styles.comCont}>
      <h5 className={styles.comHead}>Son Rəylər</h5>
      {data
        ?.slice(0)
        .reverse()
        .map((comment, index) => (
          <div key={index} className={styles.comment}>
            <div className={styles.commentOwner}>
              <div className={styles.commentOwnerLeft}>
                <div className={styles.commentOwnerPhotoCont}>
                  <img className={styles.commentOwnerPhotoImg} src={`${comment.profileImg ? comment.profileImg : noProfile}`} alt="comment owner profile photo" />
                </div>
                <div className={styles.commentOwnerNameAndDate}>
                  <strong>{comment.commentOwner}</strong>
                  <p>
                    Qeydiyyat tarixi:{" "}
                    {(() => {
                      const dateObj = new Date(comment.createdAt);
                      const day = String(dateObj.getDate()).padStart(2, "0");
                      const month = String(dateObj.getMonth() + 1).padStart(2, "0");
                      const year = dateObj.getFullYear();

                      return `${day}/${month}/${year}`;
                    })()}
                  </p>
                </div>
              </div>
              <div className={styles.commentOwnerRight}>
                <StarRating fontSize={"0.75rem"} value={comment.rating} />
              </div>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
    </div>
  );
};

export default Comments;
