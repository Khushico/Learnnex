
import React from "react";
import styles from "./WallOfLove.module.css";

// Use DiceBear or Avatar Placeholder for random avatars
const avatarUrls = [
  "https://api.dicebear.com/7.x/thumbs/svg?seed=Rahul",
  "https://api.dicebear.com/7.x/thumbs/svg?seed=Vaibhav",
  "https://api.dicebear.com/7.x/thumbs/svg?seed=Akash",
  "https://api.dicebear.com/7.x/thumbs/svg?seed=Sumit",
  "https://api.dicebear.com/7.x/thumbs/svg?seed=Nidhi",
  "https://api.dicebear.com/7.x/thumbs/svg?seed=Nivedan",
  "https://api.dicebear.com/7.x/thumbs/svg?seed=Manish"
];

const testimonials = [
  {
    name: "Rahul Phalhani",
    role: "",
    text: "Excited to announce my graduation 🎓 from the UX Career Acceleration Program by Learnnex under the mentorship of Anudeep Ayyagari (UX Anudeep). It's been an enriching journey exploring UX concepts, design tools🧑‍💻 and the realm of product design. Collaborating with talented peers, we've delved into crafting ...",
    linkedin: true,
    avatar: avatarUrls[0],
  },
  {
    name: "",
    role: "",
    text: "🚀 Just completed Vaibhav Sisinty's LinkedIn workshop at Learnnex – mind officially blown! 😃 Ready to share the top three secrets that turned my LinkedIn game around. 📅 📝 Crafting a magnetic headline, mastering connection requests, decoding the LinkedIn algorithm – all in one session! 🔑 📊 Let'...",
    linkedin: true,
    avatar: avatarUrls[1],
  },
  {
    name: "Akash Pandey",
    role: "",
    text: "I landed my first international client with Learnnex LinkedIn Workshop. Here are the five things I discovered over the five-day workshop: 1. Having an optimised profile makes you more credible and approachable. 2. You can do wonders with the Featured Section - if done the right way. 3. Followers don't matter ...",
    linkedin: true,
    avatar: avatarUrls[2],
  },
  {
    name: "sumit varma",
    role: "Media Account Specialist Head, Google",
    text: "Hey Folks Excited to start this new year with a bang with the Digital Marketing Program with Learnnex. All set to begin the journey with the Learners on 7th Jan! The best part - I'll be driving the program alongside some of the top industry veterans including but NOT Limited to: Kaushik Sen Deka (Digital Ma...",
    linkedin: true,
    avatar: avatarUrls[3],
  },
  {
    name: "Nidhi worah",
    role: "Computer Vision Engineer, Ignitus",
    text: "With this dashboard, you can track the latest trends, historical data, and forecasted movements of the USD-INR exchange rates. It's an invaluab...",
    linkedin: true,
    avatar: avatarUrls[4],
  },
  {
    name: "Nivedan Ranthi",
    role: "Founder, Future & AI",
    text: "Had a wonderful session on Advanced Prompt Engineering . Always thankful to Learnnex ...",
    linkedin: true,
    avatar: avatarUrls[5],
  },
  {
    name: "Manish Pandey",
    role: "Principal Engineer, Broadcom Software",
    text: "School I have enrolled for the course and am finding it extremely helpful. It starts with the basic and covers hands on of most cloud data services in Amazon ...",
    linkedin: false,
    avatar: avatarUrls[6],
  },
];

const linkedinIconSVG = (
  <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#0A66C2"/>
    <path d="M12.667 13.333H10V22H12.667V13.333ZM11.333 12.333C12.069 12.333 12.667 11.736 12.667 11C12.667 10.264 12.069 9.66699 11.333 9.66699C10.597 9.66699 10 10.264 10 11C10 11.736 10.597 12.333 11.333 12.333ZM22 17.667V22H19.333V18.167C19.333 17.333 18.667 16.667 17.833 16.667C17 16.667 16.333 17.333 16.333 18.167V22H13.667V13.333H16.333V14.333C16.667 13.667 17.5 13 18.5 13C20.167 13 22 14.333 22 17.667Z" fill="white"/>
  </svg>
);

const WallOfLove: React.FC = () => (
  <section className={styles.wallOfLoveSection}>
    {/* <div className={styles.headerBlock}>
      <div className={styles.subheading}>HEAR IT FROM THEM</div>
      <h1>
        Ambitious People <span className={styles.heart}>❤️</span> LearnneX
      </h1>
    </div> */}
    <div className={styles.headerBlock}>
  <div className={styles.subheading}>HEAR IT FROM THEM</div>
  <h1 className={styles.mainHeading}>
    Ambitious People <span className={styles.heart}>❤️</span> LearnneX
  </h1>
</div>

    <div className={styles.testimonialsGrid}>
      {testimonials.map((t, idx) => (
        <div className={styles.testimonialCard} key={idx} tabIndex={0}>
          {t.linkedin && (
            <div className={styles.linkedinBadge}>
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" width={20} height={20}/>
            </div>
          )}
          <p className={styles.testimonialText}>{t.text}</p>
          <div className={styles.cardFooter}>
            {t.avatar && (
              <img
                src={t.avatar}
                alt={t.name || "User"}
                className={styles.avatar}
              />
            )}
            <div>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.role}>{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button className={styles.wallButton}>See our Wall of Love</button>
  </section>
);

export default WallOfLove;
