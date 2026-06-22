import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dock() {
  const location = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "Songs", path: "/songs" },
    { label: "Reading", path: "/reading" },
    { label: "Study", path: "/study" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 28,
      }}
      style={{
        position: "fixed",
        left: "50%",
        bottom: "12px",

        display: "flex",
        alignItems: "center",

        width: "auto",
        maxWidth: "92vw",

        padding: "6px",

        borderRadius: "18px",

        background: "rgba(255,255,255,0.08)",

        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",

        border: "1px solid rgba(255,255,255,0.14)",

        boxShadow:
          "0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.15)",

        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "18px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          padding: "0 10px",

          fontWeight: 900,
          fontSize: "0.75rem",

          letterSpacing: "-0.05em",

          color: "#111",

          flexShrink: 0,

          position: "relative",
          zIndex: 2,
        }}
      >
        BENAIAH
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",

          position: "relative",
          zIndex: 2,
        }}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              textDecoration: "none",

              padding: "8px 10px",

              borderRadius: "12px",

              fontSize: "0.8rem",

              whiteSpace: "nowrap",

              color: isActive(link.path)
                ? "#111"
                : "rgba(0,0,0,0.65)",

              fontWeight: isActive(link.path)
                ? 600
                : 500,

              background: isActive(link.path)
                ? "rgba(255,255,255,0.22)"
                : "transparent",

              border: isActive(link.path)
                ? "1px solid rgba(255,255,255,0.18)"
                : "1px solid transparent",

              transition: "all 0.2s ease",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}