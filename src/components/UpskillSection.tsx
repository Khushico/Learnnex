// UpskillSection.tsx
import React from "react";
import styles from "./UpskillSection.module.css";

const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="12" width="28" height="16" rx="4" fill="#E6F5EA"/>
        <rect x="10" y="16" width="20" height="8" rx="2" fill="#16A34A"/>
      </svg>
    ),
    title: "Self paced video content",
    desc: "Master new skills on your schedule with our flexible, self-paced video content.",
    bg: "#F6F6F6",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="12" width="24" height="16" rx="4" fill="#E6F5EA"/>
        <rect x="14" y="16" width="14" height="8" rx="2" fill="#16A34A"/>
        <rect x="18" y="20" width="10" height="4" rx="2" fill="#16A34A"/>
      </svg>
    ),
    title: "Project driven approach to achieve outcomes",
    desc: "Gain practical skills through our project-driven approach for real results.",
    bg: "#F6F6F6",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#E6F5EA"/>
        <circle cx="20" cy="20" r="8" fill="#16A34A"/>
      </svg>
    ),
    title: "Office hours with Mentors for clearing blockers",
    desc: "Overcome challenges fast with dedicated mentor office hours.",
    bg: "#F6F6F6",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="8" width="24" height="24" rx="12" fill="#E6F5EA"/>
        <circle cx="20" cy="18" r="5" fill="#16A34A"/>
        <rect x="13" y="25" width="14" height="4" rx="2" fill="#16A34A"/>
      </svg>
    ),
    title: "Access to network of 1000+ learners",
    desc: "Tap into our vibrant network of learners, enhancing your learning experience.",
    bg: "#F6F6F6",
  },
];

const brands = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    bg: "#F3F6FB"
  },
  {
    name: "Shiprocket",
    logo: "https://seeklogo.com/images/S/shiprocket-logo-0A4F5A5F7B-seeklogo.com.png",
    bg: "#E9F7EC"
  },
  {
    name: "Domino's",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg",
    bg: "#E6EBEF"
  },
  {
    name: "Dr. Reddy's",
    logo: "https://seeklogo.com/images/D/dr-reddys-logo-5B6A2C4A3F-seeklogo.com.png",
    bg: "#F1EAFE"
  },
  {
    name: "Razorpay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Razorpay_logo.svg",
    bg: "#E7F2FA"
  },
  {
    name: "Aditya Birla Group",
    logo: "https://seeklogo.com/images/A/aditya-birla-group-logo-8A4B5F7B7F-seeklogo.com.png",
    bg: "#FDEBE6"
  },
  {
    name: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg",
    bg: "#E9E9E6"
  },
  {
    name: "Shell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Shell_logo.svg",
    bg: "#FFF7E6"
  },
];

const UpskillSection: React.FC = () => (
  <section className={styles.upskillSection}>
    <div className={styles.headerBlock}>
      <div className={styles.subheading}>SKILL UP, SCALE UP</div>
      <h1 className={styles.heading}>Upskill your Team; Upscale your Business</h1>
      <p className={styles.desc}>
        Elevate your team's skills to fuel efficiency and ongoing innovation for sustained business growth.
      </p>
    </div>
    <div className={styles.whyBlock}>
      <div className={styles.whyTitle}>Why learn with Learnnex?</div>
      <div className={styles.featuresGrid}>
        {features.map((f, i) => (
          <div className={styles.featureCard} key={i}>
            <div className={styles.iconBg}>{f.icon}</div>
            <div>
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.brandsBlock}>
      <div className={styles.brandsTitle}>Brands in Collaboration</div>
      <div className={styles.brandsGrid}>
        {brands.map((b, i) => (
          <div
            className={styles.brandCard}
            key={i}
            style={{ background: b.bg }}
          >
            <img src={b.logo} alt={b.name} className={styles.brandLogo} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpskillSection;

