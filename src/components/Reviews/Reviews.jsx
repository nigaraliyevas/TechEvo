import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { formatDistanceToNow } from "date-fns";
import styles from "./Reviews.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { RxChevronDown } from "react-icons/rx";

const REVIEWS_API = "http://ec2-54-146-26-87.compute-1.amazonaws.com:8081/api/v1/product/comment/";
const POST_REVIEW_API = "http://ec2-54-146-26-87.compute-1.amazonaws.com:8081/api/v1/product/comment/";

const StarRating = ({ rating, setRating }) => {
  const handleStarClick = (index) => {
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

const Reviews = ({ productId }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
  const [visibleCount, setVisibleCount] = useState(2);



  useEffect(() => {
    const token = localStorage.getItem("TechEvoToken");
    if (token) {
      setIsLoggedIn(false);
    }
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${REVIEWS_API}/${productId}`);
      const fetchedReviews = response.data.reviews;

      setAllReviews(fetchedReviews);
      setVisibleReviews(fetchedReviews.slice(0, visibleCount));
    } catch (error) {
      console.log("Error fetching reviews:", error);
    }
  };

  const loadMoreReviews = () => {
    const newVisibleCount = visibleCount + 2;
    setVisibleCount(newVisibleCount);
    setVisibleReviews(allReviews.slice(0, newVisibleCount));
  };

  const handleAddReview = async () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to leave a review.",
      });
      return;
    }

    if (newReview.comment.trim() && newReview.rating > 0) {
      try {
        const response = await axios.post(
          POST_REVIEW_API,
          { ...newReview, productId },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("TechEvoToken")}`,
            },
          }
        );

        if (response.status === 201) {
          setAllReviews([response.data.review, ...allReviews]);
          setVisibleReviews([response.data.review, ...visibleReviews]);
          setNewReview({ rating: 0, comment: "" });
        }
      } catch (error) {
        console.error("Error posting review:", error);
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Invalid Review",
        text: "Both rating and comment are required!",
      });
    }
  };

  return (
    <div >
      
      <div className={styles.totalBox}>
        <h3 style={{ fontSize: "24px", marginBottom: "40px", color: "#fff" }}>
          İstifadəçi rəyləri
        </h3>

        <div className={styles.addReview}>
          <div className={styles.textAreaContainer}>
            <textarea
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              placeholder="Rəy yaz..."
              className={styles.textArea}
            />
            <StarRating
              rating={newReview.rating}
              setRating={(rating) =>
                setNewReview({ ...newReview, rating })
              }
            />
          
          </div>
          <button onClick={handleAddReview} className={styles.addButton}>
              Rəy yaz
            </button>
        </div>

        {/* Şərhlərin siyahısı */}
        <div className={styles.reviewBox}>
          {visibleReviews.map((review, index) => (
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
                  <strong className={styles.userName}>
                    {review.user.name}
                  </strong>
                  <div className={styles.reviewTime}>
                    {formatDistanceToNow(new Date(review.createdAt), {
                      addSuffix: true,
                    })}
                  </div>
                  <div>{review.rating} ulduz</div>
                </div>
              </div>
              <p className={styles.reviewText}>{review.comment}</p>
            </div>
          ))}

          {visibleReviews.length < allReviews.length && (
            <button onClick={loadMoreReviews} className={styles.loadMoreButton}>
              Daha çox yüklə <RxChevronDown className={styles.chevron} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
