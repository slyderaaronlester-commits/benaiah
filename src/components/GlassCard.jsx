import { motion } from "framer-motion";

export default function GlassCard({ children, height }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -3,
        scale: 1.005,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 22,
      }}
      style={{
        position: "relative",
        overflow: "hidden",

        background: `
          linear-gradient(
            135deg,
            rgba(255,255,255,0.22),
            rgba(255,255,255,0.10)
          )
        `,

        backdropFilter: "blur(24px) saturate(140%)",
        WebkitBackdropFilter: "blur(24px) saturate(140%)",

        borderRadius: "36px",
        padding: "32px",
        minHeight: height || "auto",

        border: "1px solid rgba(255,255,255,0.28)",

        boxShadow: `
          0 20px 50px rgba(0,0,0,0.08),
          0 8px 20px rgba(0,0,0,0.04),
          inset 0 1px 0 rgba(255,255,255,0.35)
        `,
      }}
    >
      {/* top highlight */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* glass glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}