import React from 'react';

const StarRating = ({ rating }) => {
  const filledStars = Math.round(rating / 2);
  const starsArray = new Array(5).fill(null);

  return (
    <div className="text-yellow-400 flex items-center">
      {starsArray.map((_, index) => (
        <svg key={index} 
        className={`h-4 w-4 fill-current mr-1 ${index < filledStars ? 'text-yellow-500' : 'text-gray-300'}`}
        width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z" />
        </svg>
      ))}
      <span>{rating}/10</span>
    </div>
  );
};


export default StarRating;
