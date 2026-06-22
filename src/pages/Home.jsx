import NavigationCard from "../components/NavigationCard";
import ThisWeekCard from "../components/ThisWeekCard";
import SlideshowCard from "../components/SlideshowCard";
import HeroCard from "../components/HeroCard";
import PageWrapper from "../components/PageWrapper";
import Dock from "../components/Dock";
import useHome from "../hooks/useHome";

export default function Home() {
    const homeData = useHome();

if (!homeData.length) {
  return <PageWrapper>Loading...</PageWrapper>;
}

const content = {
  thisWeek: {
    songs: homeData.find(item => item.key === "songs")?.value || "",
    reading: homeData.find(item => item.key === "reading")?.value || "",
    study: homeData.find(item => item.key === "study")?.value || "",
    focus: homeData.find(item => item.key === "focus")?.value || "",
  },
};
  return (
  <PageWrapper>
      {/* BRANDING */}

      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(5rem, 12vw, 10rem)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.08em",
            color: "#111",
          }}
        >
          BENAIAH
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            marginTop: "10px",
          }}
        >
          Cottage Prayer
        </p>
      </div>

      {/* VERSE HERO */}

      <HeroCard />

      {/* SLIDESHOW PLACEHOLDER */}

      <SlideshowCard />

    {/* THIS WEEK'S CARD */}
        <div style={{ marginBottom: "20px" }}>
  <ThisWeekCard />
</div>

      {/* QUICK CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
       <NavigationCard
  title="Songs"
 subtitle={content.thisWeek.songs}
  to="/songs"
/>

<NavigationCard
  title="Bible Reading"
  subtitle={content.thisWeek.reading}
  to="/reading"
/>

<NavigationCard
  title="Bible Study"
  subtitle={content.thisWeek.study}
  to="/study"
/>

<NavigationCard
  title="Prayer Focus"
  subtitle={content.thisWeek.focus}
  to="/"
/>
      </div>

      <Dock />
</PageWrapper>
  );
}