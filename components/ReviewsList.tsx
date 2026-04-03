"use client";

import { useState } from "react";
import ReviewCard from "./ReviewCard";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  message: string;
  country: string;
}

interface ReviewsListProps {
  reviews: Review[];
  viewMoreText: string;
}

const REVIEWS_PER_PAGE = 6;

export default function ReviewsList({ reviews, viewMoreText }: ReviewsListProps) {
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);

  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + REVIEWS_PER_PAGE, reviews.length));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {visibleReviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            avatar={review.avatar}
            rating={review.rating}
            message={review.message}
            country={review.country}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleViewMore}
            className="px-8 py-3 border border-gray-400 text-gray-600 font-montserrat font-medium rounded-lg hover:border-gray-600 hover:text-gray-800 transition-all duration-200"
          >
            {viewMoreText}
          </button>
        </div>
      )}
    </>
  );
}
