import GlassCard from "./GlassCard";

export default function NavigationCard({
  title,
  subtitle,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
    >
      <GlassCard>
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#111",
            marginBottom: "10px",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#666",
          }}
        >
          {subtitle}
        </p>
      </GlassCard>
    </div>
  );
}