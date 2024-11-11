import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { formatDistanceToNow } from 'date-fns';
import { FaUserCircle } from 'react-icons/fa';
import { RxChevronDown } from 'react-icons/rx';
import { useGetReviewsQuery, usePostReviewMutation } from '../../redux/sercives/reviewsApi';
import styles from './Reviews.module.scss';

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
            fontSize: '24px',
            color: index < rating ? '#ffc107' : '#e4e5e9',
            cursor: 'pointer',
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
  const token = useSelector((state) => state.auth.refreshToken);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  // const [visibleCount, setVisibleCount] = useState(2);
  const { data: reviewsData, error, isLoading } = useGetReviewsQuery({productId: Number(id)});
  const [postReview] = usePostReviewMutation();
  const user = localStorage.getItem('email');

  useEffect(() => {
    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: 'Giriş Tələb olunur',
        text: 'Rəy yazmaq üçün xahiş olunur, giriş edin.',
      });
    }
  }, [user]);

  const handleAddReview = async () => {
    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: 'Giriş Tələb olunur',
        text: 'Rəy yazmaq üçün xahiş olunur, giriş edin.',
      });
      return;
    }

    if (newReview.comment.trim() && newReview.rating > 0) {
      try {
        const response = await postReview({ productId: Number(id), comment: newReview });

        if (response?.data?.status === 201) {
          Swal.fire('Uğur', 'Rəyiniz əlavə edildi!', 'success');
        }
      } catch (error) {
        Swal.fire('Xəta', 'Rəy göndərilərkən xəta baş verdi.', error.message);
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Rəy Yanlışdır',
        text: 'Reytinq və şərh mütləq olmalıdır!',
      });
    }
  };

  // const visibleReviews = reviewsData?.reviews?.slice(0, visibleCount);

  return (
    <div className={styles.totalBox}>
      <h3 style={{ fontSize: '24px', marginBottom: '40px', color: '#fff' }}>
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
            setRating={(rating) => setNewReview({ ...newReview, rating })}
          />
        </div>
        <button onClick={handleAddReview} className={styles.addButton}>
          Rəy yaz
        </button>
      </div>

      <div className={styles.reviewBox}>
        {isLoading && <div>Yüklənir...</div>}
        {reviewsData &&
          reviewsData?.map((review, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.reviewHeader}>
                <div className={styles.profileImage}>
                  {review?.profileImg ? (
                    <img
                      src={review?.profileImg}
                      alt="Profil şəkli"
                      className={styles.profileImage}
                    />
                  ) : (
                    <FaUserCircle className={styles.defaultProfileIcon} />
                  )}
                </div>
                <div className={styles.userInfo}>
                  <strong className={styles.userName}>
                    {review?.commentOwner}
                  </strong>
                  <div className={styles.reviewTime}>
                    {formatDistanceToNow(new Date(review.createdAt), {
                      addSuffix: true,
                    })}
                  </div>
                  <div>{review?.rating} ulduz</div>
                </div>
              </div>
              <p className={styles.reviewText}>{review?.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
