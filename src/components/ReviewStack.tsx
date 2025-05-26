import React, { useState } from "react";

type ReviewSource = {
  source: string;
  icon: string; // URL or SVG
  rating: string;
  count: string;
  color: string; // For icon color
};

const reviewSources: ReviewSource[] = [
  {
    source: "Google Reviews",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    rating: "4.7/5",
    count: "2,345",
    color: "#4285F4",
  },
  {
    source: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    rating: "4.6/5",
    count: "1,234",
    color: "#0077B5",
  },
  {
    source: "Trustpilot",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Trustpilot_Logo.png",
    rating: "4.5/5",
    count: "5,647",
    color: "#00B67A",
  },
];

const ReviewStack: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(reviewSources.length - 1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewSources.length);
  };

  return (
    <div className="relative w-full h-40 my-8">
      <div
        className="absolute left-1/2 -translate-x-1/2 cursor-pointer select-none"
        onClick={handleNext}
        onMouseEnter={handleNext}
        style={{
          width: "320px",
          height: "120px",
        }}
        title="Click or hover to see more ratings"
      >
        {reviewSources.map((review, idx) => {
          const pos = (activeIndex - idx + reviewSources.length) % reviewSources.length;
          const isFront = pos === 0;

          return (
            <div
              key={review.source}
              className={`absolute transition-all duration-300 ease-in-out
                ${isFront ? "z-20 opacity-100" : 
                  pos === 1 ? "z-10 opacity-80" : 
                  "z-0 opacity-60"}
              `}
              style={{
                top: `${pos * 8}px`,
                left: "50%",
                transform: `translateX(-50%) scale(${isFront ? 1 : pos === 1 ? 0.95 : 0.9})`,
                width: "320px",
              }}
            >
              <div className="bg-white rounded-xl shadow-lg border flex items-center px-6 py-4 min-h-[80px]">
                <img
                  src={review.icon}
                  alt={review.source}
                  className="w-8 h-8 mr-4"
                  style={{ filter: `drop-shadow(0 0 2px ${review.color})` }}
                />
                <div>
                  <div className="text-xs text-gray-500 mb-1">{review.source}</div>
                  <div className="flex items-center">
                    {review.source === "Trustpilot" ? (
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="#00B67A" className="mr-2">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ) : (
                      <span
                        className="w-5 h-5 mr-2 rounded-full flex items-center justify-center"
                        style={{ background: review.color, color: "#fff", fontWeight: 700 }}
                      >
                        ★
                      </span>
                    )}
                    <span className="text-lg font-semibold">
                      Rated {review.rating}{" "}
                      <span className="text-gray-500 font-normal">({review.count})</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewStack;
