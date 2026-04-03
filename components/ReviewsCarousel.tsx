"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  message: string;
  country: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "oliver_br420",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3c7e375a7c09b7138ab118401b7f2a8d-1770043628548/237c5a15-08ec-49fe-8fe3-9a399d8aaef1.jpeg",
    rating: 5.0,
    message: "From the very first interaction with Vitor, I felt he genuinely cared about the project, and that made all the difference.",
    country: "Netherlands",
  },
  {
    id: 2,
    name: "consolegaming",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/706c355b4e5cb978343240955d6b0604-804414491696619639.330967/90975F8F-630E-4D18-9770-2E43B1C18239",
    rating: 5.0,
    message: "Vitor Lopes is AMAZING! His code expertise and attention to detail are top-notch. One of the BEST devs I know!",
    country: "Australia",
  },
  {
    id: 3,
    name: "adambinabbas",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/827def2a676770da3725b726037d54c1-1518033635827/0a95789e-5ded-4897-af8d-139bae587ff2.png",
    rating: 5.0,
    message: "It was an absolute pleasure working with Vitor. He cared a lot about delivering quality work. I would definitely recommend him.",
    country: "Saudi Arabia",
  },
  {
    id: 4,
    name: "learandlife",
    avatar: "",
    rating: 5.0,
    message: "The quality of the coding is exceptional and far exceeded my expectations. Every line of code is clean and perfectly optimized.",
    country: "France",
  },
  {
    id: 5,
    name: "starlite007",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d256f42d9fbcbf165418ce89cd0a7275-1629683105703/1a1cda64-fe8d-4eb9-9806-5ccc11dab311.jpg",
    rating: 5.0,
    message: "This guy is awesome! I'll always come to him when I need something done.",
    country: "United States",
  },
  {
    id: 6,
    name: "ernestolegoazio",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9185929e3432881ab6bf976df173cfb5-1464059261683130653.838296/FDD382F8-DF33-4502-B31E-36C47DD336C3",
    rating: 5.0,
    message: "I think it's one of the best value for money service I've received on Fiverr, trust him!!",
    country: "United States",
  },
];

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

function MiniStarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-yellow-400"
          }`}
        />
      ))}
      <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-gray-100/90 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 relative flex items-center justify-center flex-shrink-0 ring-2 ring-white shadow-sm">
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              className="object-cover"
              unoptimized
            />
          ) : (
            <span className="text-sm font-bold text-gray-600 uppercase">
              {review.name.charAt(0)}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {review.name}
          </p>
          <MiniStarRating rating={review.rating} />
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
        &ldquo;{review.message}&rdquo;
      </p>
      <p className="text-xs text-gray-400 mt-2">{getCountryFlag(review.country)} {review.country}</p>
    </div>
  );
}

interface ReviewsCarouselProps {
  locale: string;
  seeAllText: string;
}

export default function ReviewsCarousel({ locale, seeAllText }: ReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pendingIndexRef = useRef<number | null>(null);
  const directionRef = useRef<"next" | "prev">("next");

  const getVisibleReviews = useCallback((index: number) => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(index + i) % reviews.length]);
    }
    return visible;
  }, []);

  const visibleReviews = getVisibleReviews(currentIndex);

  // Animate in new cards after state change
  useEffect(() => {
    if (pendingIndexRef.current === null || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.review-card');
    const direction = directionRef.current;
    const xIn = direction === "next" ? 60 : -60;

    gsap.fromTo(cards,
      { x: xIn, opacity: 0, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: direction === "next" ? 0.08 : -0.08,
        ease: "power3.out",
        onComplete: () => {
          setIsAnimating(false);
          pendingIndexRef.current = null;
        }
      }
    );
  }, [currentIndex]);

  const animateToIndex = useCallback((newIndex: number, direction: "next" | "prev") => {
    if (isAnimating || !containerRef.current || newIndex === currentIndex) return;
    setIsAnimating(true);
    pendingIndexRef.current = newIndex;
    directionRef.current = direction;

    const cards = containerRef.current.querySelectorAll('.review-card');
    const xOut = direction === "next" ? -60 : 60;

    gsap.to(cards, {
      x: xOut,
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      stagger: direction === "next" ? 0.05 : -0.05,
      ease: "power3.in",
      onComplete: () => {
        setCurrentIndex(newIndex);
      }
    });
  }, [isAnimating, currentIndex]);

  useEffect(() => {
    if (isHovered || isAnimating) return;

    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % reviews.length;
      animateToIndex(newIndex, "next");
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, isAnimating, currentIndex, animateToIndex]);

  // Initial mount animation
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.review-card');
    gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, []);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
          <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
            Client Reviews
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>
        <Link
          href={`/${locale}/reviews`}
          className="text-xs text-blue-400 hover:text-blue-700 transition-colors font-medium"
        >
          {seeAllText} →
        </Link>
      </div>

      <div ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleReviews.map((review, idx) => (
            <div key={`${currentIndex}-${idx}`} className="review-card">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4 italic">
        Authentic reviews from Fiverr
      </p>
    </div>
  );
}
