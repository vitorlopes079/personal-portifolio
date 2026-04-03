"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
  name: string;
  avatar: string;
  rating: number;
  message: string;
  country?: string;
}

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 < 0.8;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0) - (rating % 1 >= 0.8 ? 1 : 0);
  const extraFull = rating % 1 >= 0.8 ? 1 : 0;

  for (let i = 0; i < fullStars + extraFull; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="w-4 h-4 text-yellow-400 fill-yellow-400"
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative w-4 h-4">
        <Star className="w-4 h-4 text-yellow-400 absolute" />
        <div className="absolute overflow-hidden w-1/2">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>
      </div>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star
        key={`empty-${i}`}
        className="w-4 h-4 text-yellow-400"
      />
    );
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="ml-2 text-sm text-gray-600 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}

const MESSAGE_CHAR_LIMIT = 150;

const countryFlags: Record<string, string> = {
  "United States": "🇺🇸",
  "United Kingdom": "🇬🇧",
  "Canada": "🇨🇦",
  "Australia": "🇦🇺",
  "Germany": "🇩🇪",
  "France": "🇫🇷",
  "Netherlands": "🇳🇱",
  "Brazil": "🇧🇷",
  "Japan": "🇯🇵",
  "Saudi Arabia": "🇸🇦",
  "Cameroon": "🇨🇲",
};

function getCountryFlag(country: string): string {
  return countryFlags[country] || "🌍";
}

export default function ReviewCard({
  name,
  avatar,
  rating,
  message,
  country,
}: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = message.length > MESSAGE_CHAR_LIMIT;

  const displayMessage = expanded || !needsTruncation
    ? message
    : message.slice(0, MESSAGE_CHAR_LIMIT).trim() + "...";

  return (
    <div className="bg-gray-100 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300 relative flex items-center justify-center">
            {avatar ? (
              <Image
                src={avatar}
                alt={`${name}'s avatar`}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <span className="text-xl font-bold text-gray-600 uppercase">
                {name.charAt(0)}
              </span>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h3 className="font-montserrat font-bold text-gray-900 text-lg truncate">
              {name}
            </h3>
            {country && (
              <span className="text-sm text-gray-500">
                {getCountryFlag(country)} {country}
              </span>
            )}
          </div>
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="mt-4 flex-1">
        <p className="text-gray-600 font-montserrat leading-relaxed">
          &ldquo;{displayMessage}&rdquo;
        </p>
        {needsTruncation && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-blue-400 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}
