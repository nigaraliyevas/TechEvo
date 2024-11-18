import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { parseISO, formatDistanceToNowStrict } from "date-fns";
import { tr } from "date-fns/locale";
import { useGetReviewsQuery, usePostReviewMutation } from "../../redux/sercives/reviewsApi";
import styles from "./Reviews.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { RxChevronDown } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";

const StarRating = ({ rating, setRating }) => {
  const handleStarClick = index => {
    setRating(index + 1);
  };

  return (
    <div className={styles.star_rating}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            fontSize: "24px",
            color: index < rating ? "#ffc107" : "#e4e5e9",
            cursor: "pointer",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Reviews = ({ data }) => {
  const { id } = data;
  const dispatch = useDispatch();

  const token = localStorage.getItem("accessToken"); // Redux-dan access token alırıq
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
  const [visibleCount, setVisibleCount] = useState(2);
  const { data: reviewsData, error, isLoading } = useGetReviewsQuery(Number(id));
  console.log(Number(id));
  const [postReview] = usePostReviewMutation();
  console.log(reviewsData);

  const user = localStorage.getItem("email");
  const [reviews, setReviews] = useState([]);

  console.log(token);

  useEffect(() => {
    if (reviewsData) {
      const sortedReviews = [...reviewsData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setReviews(sortedReviews);
    }
  }, [reviewsData]);

  const calculateTimeAgo = timestamp => {
    try {
      const date = parseISO(timestamp);
      return formatDistanceToNowStrict(date, { addSuffix: true, locale: tr });
    } catch (error) {
      return "Bilinməyən vaxt";
    }
  };

  const handleAddReview = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Giriş Tələb olunur",
        text: "Rəy yazmaq üçün xahiş olunur, giriş edin.",
      });
      return;
    }

    if (newReview.comment.trim() && newReview.rating > 0) {
      try {
        const response = await postReview({ productId: Number(id), comment: newReview });
        console.log(response.data);

        if (response.data) {
          Swal.fire("Success", "Rəyiniz əlavə edildi!", "success");

          setReviews([
            {
              ...newReview,
              commentOwner: user,
              createdAt: new Date().toISOString(),
            },
            ...reviews,
          ]);

          setNewReview({ rating: 0, comment: "" });
        } else {
          Swal.fire("Xəta", "Rəy göndərilərkən xəta baş verdi.");
        }
      } catch (error) {
        Swal.fire("Xəta", "Rəy göndərilərkən xəta baş verdi.");
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Rəy Yanlışdır",
        text: "Reytinq və şərh mütləq olmalıdır!",
      });
    }
  };

  const visibleReviews = reviews?.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 2);
  };

  const renderStars = rating => {
    return (
      <div className={styles.star_container}>
        {[...Array(5)].map((_, index) => (
          <AiFillStar
            key={index}
            style={{
              fontSize: "15px",
              color: index < rating ? "#ffc107" : "#e4e5e9",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.totalBox}>
      <h3 style={{ fontSize: "24px", marginBottom: "40px", color: "#fff" }}>İstifadəçi rəyləri</h3>

      <div className={styles.addReview}>
        <div className={styles.textAreaContainer}>
          <textarea value={newReview.comment} onChange={e => setNewReview({ ...newReview, comment: e.target.value })} placeholder="Rəy yaz..." className={styles.textArea} />
          <StarRating rating={newReview.rating} setRating={rating => setNewReview({ ...newReview, rating })} />
        </div>
        <button onClick={handleAddReview} className={styles.addButton}>
          Rəy yaz
        </button>
      </div>

      <div className={styles.reviewBox}>
        {isLoading && <div>Yüklənir...</div>}
        {error && <div>Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.</div>}

        {visibleReviews?.map((review, index) => (
          <div key={index} className={styles.review}>
            <div className={styles.reviewHeader}>
              <div className={styles.profileImage}>{review?.profileImg ? <img src={review?.profileImg} alt="Profil şəkli" className={styles.profileImage} /> : <FaUserCircle className={styles.defaultProfileIcon} />}</div>
              <div className={styles.userInfo}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <strong className={styles.userName}>{review?.commentOwner}</strong>
                  <div className={styles.reviewTime}>{calculateTimeAgo(review?.createdAt)}</div>
                </div>
                <div>{renderStars(review?.rating)}</div>
              </div>
            </div>
            <p className={styles.reviewText}>{review?.comment}</p>
          </div>
        ))}

        {reviews.length > visibleCount && (
          <button onClick={handleLoadMore} className={styles.loadMoreButton}>
            Daha çox göstər <RxChevronDown style={{ fontSize: "26px" }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;
