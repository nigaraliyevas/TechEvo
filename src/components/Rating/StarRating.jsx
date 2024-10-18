// StarRating.js
import React from 'react';
import StarIcon from '@mui/icons-material/Star'; // Tam ulduz ikonu
import StarHalfIcon from '@mui/icons-material/StarHalf'; // Yarım ulduz ikonu

const StarRating = ({ value }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: 5 }, (_, index) => {
        if (index < Math.floor(value)) {
          return <StarIcon key={index} sx={{ color: 'gold' }} />; // Tam ulduz
        } else if (index === Math.floor(value) && value % 1 !== 0) {
          return <StarHalfIcon key={index} sx={{ color: 'gold' }} />; // Yarım ulduz
        } else {
          return <StarIcon key={index} sx={{ color: 'transparent' }} />; // Boş ulduz
        }
      })}
    </div>
  );
};

export default StarRating;
