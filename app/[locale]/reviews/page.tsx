import { Metadata } from "next";
import { getTranslations, Locale } from "@/lib/translations";
import ReviewsList from "@/components/ReviewsList";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const translations = getTranslations(locale as Locale);
  return {
    title: `${translations.Reviews} - Vitor Lopes`,
    description: translations.Reviews_Subtitle,
  };
}

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  message: string;
  country: string;
}

// Spreads reviews from same customer apart
function spreadReviews(reviews: Review[]): Review[] {
  const grouped: Record<string, Review[]> = {};

  // Group by name
  reviews.forEach((review) => {
    if (!grouped[review.name]) {
      grouped[review.name] = [];
    }
    grouped[review.name].push(review);
  });

  // Sort groups by size (largest first) to distribute evenly
  const sortedGroups = Object.values(grouped).sort((a, b) => b.length - a.length);

  const result: (Review | null)[] = new Array(reviews.length).fill(null);

  for (const group of sortedGroups) {
    const spacing = Math.floor(reviews.length / group.length);
    let position = 0;

    for (const review of group) {
      // Find next available slot starting from ideal position
      while (result[position] !== null) {
        position = (position + 1) % reviews.length;
      }
      result[position] = review;
      position = (position + spacing) % reviews.length;
    }
  }

  return result.filter((r): r is Review => r !== null);
}

const rawReviews: Review[] = [
  {
    id: 1,
    name: "oliver_br420",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3c7e375a7c09b7138ab118401b7f2a8d-1770043628548/237c5a15-08ec-49fe-8fe3-9a399d8aaef1.jpeg",
    rating: 5.0,
    message:
      "From the very first interaction with Vitor, I felt he genuinely cared about the project, and that made all the difference. He didn't just execute tasks; he took the time to understand the details, asked thoughtful questions, suggested improvements, and followed everything closely, which gave me confidence from the start. Throughout the project, he showed strong technical skills, great attention to aesthetics and security, and excellent communication. He kept me informed at every stage and never left me in the dark. In the end, it wasn't just a great delivery; it was a great experience working with him.",
    country: "Netherlands",
  },
  {
    id: 2,
    name: "colinsforlife",
    avatar: "",
    rating: 5.0,
    message:
      "Extremely satisfied with the delivery. He a code expert who is very understanding and cooperative. I thank you very much sir. You deserve a PRO VETTED badge..",
    country: "Cameroon",
  },
  {
    id: 3,
    name: "starlite007",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d256f42d9fbcbf165418ce89cd0a7275-1629683105703/1a1cda64-fe8d-4eb9-9806-5ccc11dab311.jpg",
    rating: 5.0,
    message:
      "Absolutely loved working with this seller! The delivery was super fast and the quality exceeded my expectations. Would definitely recommend and will be back for future projects. Thanks again!",
    country: "United States",
  },
  {
    id: 4,
    name: "jcadamgold",
    avatar: "",
    rating: 5.0,
    message:
      "Great work! Delivered a professional admin dashboard with clean code and excellent communication. Proactive, reliable, and easy to work with. Will hire again.",
    country: "Canada",
  },
  {
    id: 5,
    name: "starlite007",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d256f42d9fbcbf165418ce89cd0a7275-1629683105703/1a1cda64-fe8d-4eb9-9806-5ccc11dab311.jpg",
    rating: 5.0,
    message:
      "Always a pleasure working with you!",
    country: "United States",
  },
  {
    id: 6,
    name: "starlite007",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d256f42d9fbcbf165418ce89cd0a7275-1629683105703/1a1cda64-fe8d-4eb9-9806-5ccc11dab311.jpg",
    rating: 5.0,
    message:
      "Very knowledgable and helpful. Always seeking the best solutions for my problems.",
    country: "United States",
  },
  {
    id: 7,
    name: "starlite007",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d256f42d9fbcbf165418ce89cd0a7275-1629683105703/1a1cda64-fe8d-4eb9-9806-5ccc11dab311.jpg",
    rating: 5.0,
    message:
      "This guy is awesome! I'll always come to him when I need something done.",
    country: "United States",
  },
  {
    id: 8,
    name: "wolebadmus",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c5fef9edb0587bd447f7595967b5d7b6-1520291049998/36c705bc-9b23-4837-882a-86f6c1c0aa7c.jpeg",
    rating: 5.0,
    message:
      "Experienced and very helpful",
    country: "United States",
  },
  {
    id: 9,
    name: "consolegaming",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/706c355b4e5cb978343240955d6b0604-804414491696619639.330967/90975F8F-630E-4D18-9770-2E43B1C18239",
    rating: 5.0,
    message:
      "Vitor Lopes EXCEEDED my expectations. His proactive communication and dedication made working with him a breeze. Always a pleasure working with him; he works really hard to ensure the product is exactly what I need. Highly recommend!",
    country: "Australia",
  },
  {
    id: 10,
    name: "jcadamgold",
    avatar: "",
    rating: 5.0,
    message:
      "Great developer! Delivered a professional admin dashboard with clean code and excellent communication. On time, responsive, and easy to work with. Will hire again.",
    country: "Canada",
  },
  {
    id: 11,
    name: "consolegaming",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/706c355b4e5cb978343240955d6b0604-804414491696619639.330967/90975F8F-630E-4D18-9770-2E43B1C18239",
    rating: 5.0,
    message:
      "He works diligently, always prioritizing your satisfaction with the final product, and remains committed to completing every detail until it meets your expectations.",
    country: "Australia",
  },
  {
    id: 12,
    name: "consolegaming",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/706c355b4e5cb978343240955d6b0604-804414491696619639.330967/90975F8F-630E-4D18-9770-2E43B1C18239",
    rating: 5.0,
    message:
      "Vitor Lopes is AMAZING! His code expertise and attention to detail are top-notch, with thorough documentation to match. He went above and beyond with proactive communication and quick responsiveness. This guy does not stop—he works hard to make sure you are happy. One of the BEST devs I know!",
    country: "Australia",
  },
  {
    id: 13,
    name: "suzihast",
    avatar: "",
    rating: 5.0,
    message:
      "Vitor is great to work with, ensuring that all requirements are met on time. He also provided valuable advice to help improve my website, making the entire process smooth and efficient.",
    country: "United Kingdom",
  },
  {
    id: 14,
    name: "learandlife",
    avatar: "",
    rating: 5.0,
    message:
      "We are very lucky to be accompanied by Vitor. He is excellent in his job and also listens, answers all questions and minor changes. Thank you Vitor.",
    country: "France",
  },
  {
    id: 15,
    name: "dyrexreal",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c9a6e7b125f71fbbbad073dd24df41d7-1786859051723008269.731224/684DCC3C-D883-428E-9B82-E4FD60EFBEE5",
    rating: 4.7,
    message:
      "Very easy to work with.",
    country: "United States",
  },
  {
    id: 16,
    name: "learandlife",
    avatar: "",
    rating: 5.0,
    message:
      "I'm absolutely satisfy by the work done by Vitor. The quality of the coding is exceptional and far exceeded my expectations. Every line of code is clean, well-commented, and perfectly optimized. The developer not only met all the specifications of the project, but he also came up with smart improvements that greatly improved the performance of the project.",
    country: "France",
  },
  {
    id: 17,
    name: "ernestolegoazio",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9185929e3432881ab6bf976df173cfb5-1464059261683130653.838296/FDD382F8-DF33-4502-B31E-36C47DD336C3",
    rating: 5.0,
    message:
      "I think it's one of the best value for money service I've received on Fiverr, trust him!!",
    country: "United States",
  },
  {
    id: 18,
    name: "adambinabbas",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/827def2a676770da3725b726037d54c1-1518033635827/0a95789e-5ded-4897-af8d-139bae587ff2.png",
    rating: 5.0,
    message:
      "It was an absolute pleasure working with Vitor. Communicating with him was such a breeze and he was a partner at work that wanted to deliver the best possible result. He was not pushy to finish and cared a lot about delivering quality work. I would definitely recommend him.",
    country: "Saudi Arabia",
  },
  {
    id: 19,
    name: "ernestolegoazio",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9185929e3432881ab6bf976df173cfb5-1464059261683130653.838296/FDD382F8-DF33-4502-B31E-36C47DD336C3",
    rating: 5.0,
    message:
      "Verry good like every time",
    country: "United States",
  },
  {
    id: 20,
    name: "adambinabbas",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/827def2a676770da3725b726037d54c1-1518033635827/0a95789e-5ded-4897-af8d-139bae587ff2.png",
    rating: 5.0,
    message:
      "This is not my first time working with Vitor and this will not be the last time. He's great.",
    country: "Saudi Arabia",
  },
];

// Apply smart spreading to separate same-customer reviews
const reviews = spreadReviews(rawReviews);

export default async function ReviewsPage({ params }: PageProps) {
  const { locale } = await params;
  const translations = getTranslations(locale as Locale);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.Reviews_Title}
          </h1>
          <p className="font-montserrat text-lg text-gray-600 mb-6">
            {translations.Reviews_Subtitle}
          </p>
          <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
            <p className="font-montserrat">
              {translations.Reviews_Disclaimer}{" "}
              <a
                href="https://www.fiverr.com/vitorlopes079"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-700 underline font-medium"
              >
                {translations.Reviews_Disclaimer_Link}
              </a>
              . {translations.Reviews_Disclaimer_Note}
            </p>
          </div>
        </div>

        <ReviewsList
          reviews={reviews}
          viewMoreText={translations.Reviews_View_More}
        />
      </div>
    </div>
  );
}
