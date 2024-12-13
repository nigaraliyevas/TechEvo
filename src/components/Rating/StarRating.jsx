// StarRating.js
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { styled } from "@mui/system";
import styles from "./StarRating.module.scss";

const StyledStarIcon = styled(StarIcon)(({ theme, fontSize }) => ({
  color: "gold",
  fontSize: fontSize || "1.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: fontSize ? `calc(${parseFloat(fontSize) * 0.6}rem)` : "0.9rem",
  },
}));

const StyledStarHalfIcon = styled(StarHalfIcon)(({ theme, fontSize }) => ({
  color: "gold",
  fontSize: fontSize || "1.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: fontSize ? `calc(${parseFloat(fontSize) * 0.6}rem)` : "0.9rem",
  },
}));

const StyledStarBorderIcon = styled(StarBorderIcon)(({ theme, fontSize }) => ({
  color: "gold",
  fontSize: fontSize || "1.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: fontSize ? `calc(${parseFloat(fontSize) * 0.6}rem)` : "0.9rem",
  },
}));

const StarRating = ({ value, fontSize }) => {
  const rating = typeof value === "number" && !isNaN(value) ? value : 0;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: fullStars }, (_, index) => (
        <StyledStarIcon key={index} fontSize={fontSize} />
      ))}
      {hasHalfStar && <StyledStarHalfIcon fontSize={fontSize} key="half" />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <StyledStarBorderIcon key={`empty-${index}`} fontSize={fontSize} />
      ))}
      <span
        className={styles.star_value}
        style={{
          marginLeft: "8px",
          fontSize: fontSize ? `calc(${parseFloat(fontSize) * 0.8}rem)` : "1rem",
          color: "white",
          fontWeight: "400",
        }}
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
