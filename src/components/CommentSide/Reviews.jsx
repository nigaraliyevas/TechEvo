import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { formatDistanceToNow } from 'date-fns'; // 'date-fns' kitabxanası ilə vaxtı formatlayırıq


const Reviews = () => {
  const [reviews, setReviews] = useState([]); // Bütün rəylər
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(2); // İlk 2 rəy
  const [newReview, setNewReview] = useState(''); // Yeni rəy inputu
  const [isLoggedIn, setIsLoggedIn] = useState(false); // İstifadəçi login olubmu?

  // API-dən rəyləri çək
  useEffect(() => {
    axios.get('https://api.example.com/reviews') // API endpoint dəyişəcək
      .then(response => {
        setReviews(response.data); // Rəyləri state-ə yüklə
      })
      .catch(error => {
        console.error('Rəyləri almaq mümkün olmadı:', error);
      });

    // Burada istifadəçinin login olub olmadığını yoxlayırıq (məsələn, token ilə)
    const userToken = localStorage.getItem('token'); // Məsələn, localStorage-dən token yoxla
    if (userToken) {
      setIsLoggedIn(true); // Əgər token varsa, istifadəçi login olunub
    }
  }, []);

  // Yeni rəy əlavə et
  const handleAddReview = () => {
    if (!isLoggedIn) {
      // Əgər istifadəçi qeydiyyatdan keçməyibsə SweetAlert ilə xəbərdarlıq göstər
      Swal.fire({
        title: 'Xəbərdarlıq',
        text: 'Rəy yazmaq üçün qeydiyyatdan keçməlisiniz!',
        icon: 'warning',
        confirmButtonText: 'Qeydiyyata keç'
      });
      return;
    }

    // İstifadəçi qeydiyyatdan keçibsə, rəy əlavə etməyi icra et
    if (newReview.trim()) {
      axios.post('https://api.example.com/reviews', { review: newReview }) // Rəy POST metodu ilə göndərilir
        .then(response => {
          setReviews([response.data, ...reviews]); // Yeni rəy əlavə edilir və rəylər yenilənir
          setNewReview(''); // Input sıfırlanır
        })
        .catch(error => {
          console.error('Rəy əlavə etmək mümkün olmadı:', error);
        });
    }
  };

  // "Load More" düyməsi ilə əlavə rəyləri göstər
  const handleLoadMore = () => {
    setVisibleReviewsCount(prevCount => prevCount + 2); // Görünən rəylərin sayını 2 artır
  };

  // Rating-i göstərən funksiya (ulduzlar)
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? '#ffc107' : '#e4e5e9' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <h3>Reviews</h3>

      {/* Rəy əlavə etmə formu */}
      <div>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Rəyinizi yazın"
        />
        <button onClick={handleAddReview}>Rəy əlavə et</button>
      </div>

      {/* Rəylər */}
      <div>
        {reviews.slice(0, visibleReviewsCount).map((review, index) => (
          <div key={index} className="review" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            {/* İstifadəçi haqqında məlumat */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={review.user.profileImage} // Profil şəkli
                alt="Profil şəkli"
                style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
              />
              <div>
                <strong>{review.user.name}</strong> {/* İstifadəçi adı */}
                <div style={{ fontSize: '12px', color: '#777' }}>
                  {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })} {/* Rəyin yazılma müddəti */}
                </div>
              </div>
            </div>

            {/* Rəy məzmunu */}
            <p>{review.text}</p>

            {/* Backend-dən gələn Rating */}
            <div>
              {renderStars(review.rating)} {/* Rating ulduzları */}
            </div>
          </div>
        ))}

        {/* "Load More" düyməsi */}
        {visibleReviewsCount < reviews.length && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default Reviews;
