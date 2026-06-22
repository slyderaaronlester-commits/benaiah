import { useState } from "react";
import NavigationCard from "../components/NavigationCard";
import Dock from "../components/Dock";
import PageWrapper from "../components/PageWrapper";
import SongModal from "../components/SongModal";
import useSongs from "../hooks/useSongs";

export default function Songs() {
  const [selectedSong, setSelectedSong] = useState(null);
const songs = useSongs();
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  return (
    <PageWrapper>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 900,
          marginBottom: "24px",
        }}
      >
        Songs
      </h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          marginBottom: "24px",
        }}
      >
        {[
          "All",
          "English",
          "Kannada",
          "Tamil",
          "Telugu",
          "Hindi",
        ].map((lang) => (
          <button
            key={lang}
            style={{
  border: "1px solid rgba(0,0,0,0.08)",
  padding: "10px 16px",
  borderRadius: "999px",
  background:
    selectedLanguage === lang ? "#111" : "white",
  color:
    selectedLanguage === lang ? "white" : "#111",
  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
  fontWeight: 600,
  cursor: "pointer",
  whiteSpace: "nowrap",
}}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
<input
  type="text"
  placeholder="Search songs..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "100%",
    padding: "14px 18px",
    borderRadius: "20px",
    border: "1px solid rgba(0,0,0,0.08)",
    background: "white",
    marginBottom: "24px",
    fontSize: "1rem",
    outline: "none",
  }}
/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {songs
  .filter((song) =>
  song.title.toLowerCase().includes(search.toLowerCase())
)
.filter(
  (song) =>
    selectedLanguage === "All" ||
    song.language === selectedLanguage
)
  .map((song) => (
          <div
            key={song.id}
            onClick={() => setSelectedSong(song)}
            style={{ cursor: "pointer" }}
          >
            <NavigationCard
  title={song.title}
  subtitle={song.language}
  onClick={() => setSelectedSong(song)}
/>
          </div>
        ))}
      </div>

      <SongModal
        song={selectedSong}
        onClose={() => setSelectedSong(null)}
      />

      <Dock />
    </PageWrapper>
  );
}