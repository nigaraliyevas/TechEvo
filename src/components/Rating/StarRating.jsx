// StarRating.js
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { styled } from '@mui/system';

const StyledStarIcon = styled(StarIcon)(({ theme }) => ({
  color: 'gold',
  fontSize: '2rem', // Default size
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem', // Size for mobile screens
  },
}));

const StarRating = ({ value }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: 5 }, (_, index) => {
        if (index < Math.floor(value)) {
          return <StyledStarIcon key={index} />; // Full star
        } else if (index === Math.floor(value) && value % 1 !== 0) {
          return <StyledStarIcon component={StarHalfIcon} key={index} />; // Half star
        } else {
          return (
            <StyledStarIcon key={index} sx={{ color: 'transparent' }} /> // Empty star
          );
        }
      })}
    </div>
  );
};

export default StarRating;
