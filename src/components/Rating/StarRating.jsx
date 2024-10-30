// StarRating.js
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { styled } from '@mui/system';



const StyledStarIcon = styled(StarIcon)(({ theme, fontSize }) => ({
  color: 'gold',
  fontSize: fontSize || '1.5rem', // Default size or prop-based size
  [theme.breakpoints.down('sm')]: {
    fontSize: fontSize ? `calc(${fontSize} * 0.6)` : '0.9rem', // Responsive size
  },
}));

const StarRating = ({ value, fontSize }) => {
  const fullStars = Math.floor(value); // Tam ulduzların sayı
  const hasHalfStar = value % 1 !== 0; // Yarım ulduzun olub-olmaması

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: fullStars }, (_, index) => (
        <StyledStarIcon key={index} fontSize={fontSize} /> // Tam ulduzlar
      ))}
      {hasHalfStar && (
        <StyledStarIcon component={StarHalfIcon} fontSize={fontSize} key="half" /> // Yarım ulduz
      )}
      {/* Burada boş ulduzları gizlədirik */}
      {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }, (_, index) => (
        <StyledStarIcon key={`empty-${index}`} sx={{ display: 'none' }} fontSize={fontSize} /> // Boş ulduzlar
      ))}
      <span style={{ marginLeft: '8px', fontSize: fontSize || '16px', color: 'white', fontWeight: '400'}}>
        {value.toFixed(1)}
      </span>
    </div>
  );
};



export default StarRating;
