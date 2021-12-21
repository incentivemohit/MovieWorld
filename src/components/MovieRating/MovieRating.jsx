import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <Rating onClick={handleRating} ratingValue={rating}></Rating>
    </>
  );
}
