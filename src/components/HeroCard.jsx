import { motion } from "framer-motion";
import useHome from "../hooks/useHome";

export default function HeroCard() {
  const homeData = useHome();

  if (!homeData.length) {
    return null;
  }

  const verseRow = homeData[0];
  const referenceRow = homeData[1];

  const verse = verseRow?.value || "NO VERSE";
  const reference = referenceRow?.value || "NO REFERENCE";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
      }}
      style={{
        position: "relative",
        overflow: "hidden",

        borderRadius: "40px",
        minHeight: "340px",
        marginBottom: "32px",

        background: `
          linear-gradient(
            135deg,
            rgba(255,255,255,0.28),
            rgba(255,255,255,0.12)
          )
        `,

        backdropFilter: "blur(24px) saturate(140%)",
        WebkitBackdropFilter: "blur(24px) saturate(140%)",

        border: "1px solid rgba(255,255,255,0.28)",

        boxShadow: `
          0 30px 80px rgba(0,0,0,0.08),
          0 10px 30px rgba(0,0,0,0.04),
          inset 0 1px 0 rgba(255,255,255,0.35)
        `,
      }}
    >
        <div
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2000')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(20px)",
    transform: "scale(1.15)",
    opacity: 0.82,
  }}
/>
      {/* ambient glow top left */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* blue light */}
      <div
        style={{
          position: "absolute",
          right: "-120px",
          top: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(180,200,255,0.22), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* glass shine */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "42px",
        }}
      >
        <p
          style={{
            color: "#ffffff",
            fontWeight: 600,
            marginBottom: "18px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
          }}
        >
          Verse of the Week
        </p>

        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: "950px",
            marginBottom: "24px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
          }}
        >
          {verse}
        </h2>

        <p
          style={{
            color: "#ffffff",
            fontSize: "1.05rem",
            fontWeight: 600,
          }}
        >
          {reference}
        </p>
      </div>
    </motion.div>
  );
}