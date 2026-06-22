import GlassCard from "./GlassCard";
import useHome from "../hooks/useHome";

export default function ThisWeekCard() {
  const homeData = useHome();

  if (!homeData.length) {
    return <GlassCard>Loading...</GlassCard>;
  }

  const songs =
    homeData.find((item) => item.key === "songs")?.value || "";

  const reading =
    homeData.find((item) => item.key === "reading")?.value || "";

  const study =
    homeData.find((item) => item.key === "study")?.value || "";

  const focus =
    homeData.find((item) => item.key === "focus")?.value || "";

  return (
    <GlassCard>
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          marginBottom: "16px",
        }}
      >
        This Week
      </h3>

      <div style={{ color: "#666", lineHeight: 2.2 }}>
        <div>{songs}</div>
        <div>{reading}</div>
        <div>{study}</div>
        <div>{focus}</div>
      </div>
    </GlassCard>
  );
}