import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { formatDistanceToNow } from "date-fns";
import styles from "./Reviews.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { RxChevronDown } from "react-icons/rx";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(2);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Backenddən rəylər və reytinqlər gəlir
    axios
      .get(
        "https://ff82f4df-f72b-4dec-84ca-487132aff620.mock.pstmn.io/api/v1/product/comment"
      )
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Rəyləri almaq mümkün olmadı:", error);
      });

    const userToken = localStorage.getItem("TechEvoToken");
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleAddReview = () => {
    const userToken = localStorage.getItem("TechEvoToken");

    if (!isLoggedIn) {
      Swal.fire({
        title: "Xəbərdarlıq",
        text: "Rəy yazmaq üçün qeydiyyatdan keçməlisiniz!",
        icon: "warning",
        confirmButtonText: "Qeydiyyata keç",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/register";
        }
      });
      return;
    }

    if (newReview.trim() && rating > 0) {
      axios
        .post(
          "https://ff82f4df-f72b-4dec-84ca-487132aff620.mock.pstmn.io/api/v1/product/comment",
          {
            review: newReview,
            rating,
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((response) => {
          setReviews([response.data, ...reviews]);
          setNewReview("");
          setRating(0);
        })
        .catch((error) => {
          console.error("Rəy əlavə etmək mümkün olmadı:", error);
        });
    } else {
      Swal.fire({
        title: "Xəbərdarlıq",
        text: "Rəy və reytinq boş ola bilməz!",
        icon: "warning",
        confirmButtonText: "Bağla",
      });
    }
  };

  const handleLoadMore = () => {
    setVisibleReviewsCount((prevCount) => prevCount + 2);
  };

  // Rating selection
  const renderRatingSelector = () => {
    return (
      <div className={styles.ratingSelector}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={rating >= star ? styles.starFilled : styles.starEmpty}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <span key={i} className={styles.starFilled}>
            ★
          </span>
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <span key={i} className={styles.starHalf}>
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className={styles.starEmpty}>
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="container">
      <div className={styles.totalBox}>
        <h3 style={{ fontSize: "24px", marginBottom: "40px", color: "#fff" }}>
          İstifadəçi rəyləri
        </h3>
        {/* Yeni şərh yazma bölməsi */}
        <div className={styles.addReview}>
          <div className={styles.textAreaContainer}>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Rəy yaz..."
              className={styles.textArea}
            />
            {/* Rating selector inside textarea container */}
            <div className={styles.overlayRating}>
              {renderRatingSelector()}
            </div>
          </div>
          <button onClick={handleAddReview} className={styles.addButton}>
            Rəy yaz
          </button>
        </div>

        {/* Şərhlərin siyahısı */}
        <div className={styles.reviewBox}>
          {reviews.slice(0, visibleReviewsCount).map((review, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.reviewHeader}>
                <div className={styles.profileImage}>
                  {review?.user?.profileImage ? (
                    <img
                      src={review?.user?.profileImage}
                      alt="Profil şəkli"
                      className={styles.profileImage}
                    />
                  ) : (
                    <FaUserCircle className={styles.defaultProfileIcon} />
                  )}
                </div>
                <div className={styles.userInfo}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <strong className={styles.userName}>
                      {review.commentOwner}
                    </strong>
                    <div className={styles.reviewTime}>
                      {formatDistanceToNow(new Date(review.createdAt), {
                        addSuffix: true,
                      })}
                    </div>
                  </div>
                  <div>{renderStars(review.rating)}</div>
                </div>
              </div>
              <p className={styles.reviewText}>{review.comment}</p>
            </div>
          ))}

          {visibleReviewsCount < reviews.length && (
            <button onClick={handleLoadMore} className={styles.loadMoreButton}>
              Daha çox yüklə <RxChevronDown className={styles.chevron} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
