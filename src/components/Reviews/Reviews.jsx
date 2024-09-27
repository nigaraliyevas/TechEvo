import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { formatDistanceToNow } from "date-fns";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(2);
  const [newReview, setNewReview] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.example.com/reviews")
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

    if (newReview.trim()) {
      axios
        .post("url", { review: newReview })
        .then((response) => {
          setReviews([response.data, ...reviews]);
          setNewReview("");
        })
        .catch((error) => {
          console.error("Rəy əlavə etmək mümkün olmadı:", error);
        });
    }
  };

  const handleLoadMore = () => {
    setVisibleReviewsCount((prevCount) => prevCount + 2);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={styles.stars}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container">
      <div className={styles.totalBox}>
        <div className={styles.addReview}>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Rəyinizi yazın"
            className={styles.textArea}
          />
          <button onClick={handleAddReview} className={styles.addButton}>
            Rəy yaz
          </button>
        </div>

        {/* Rəylər */}
        <div>
          {reviews.slice(0, visibleReviewsCount).map((review, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.reviewHeader}>
                <img
                  src={review.user.profileImage}
                  alt="Profil şəkli"
                  className={styles.profileImage}
                />
                <div className={styles.userInfo}>
                  <strong className={styles.userName}>
                    {review.user.name}
                  </strong>
                  <div className={styles.reviewTime}>
                    {formatDistanceToNow(new Date(review.createdAt), {
                      addSuffix: true,
                    })}
                  </div>
                </div>
              </div>

              <p className={styles.reviewText}>{review.text}</p>
              <div>{renderStars(review.rating)}</div>
            </div>
          ))}

          {visibleReviewsCount < reviews.length && (
            <button onClick={handleLoadMore} className={styles.loadMoreButton}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
