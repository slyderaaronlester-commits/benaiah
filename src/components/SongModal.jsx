export default function SongModal({ song, onClose }) {
  if (!song) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "32px",
          borderRadius: "36px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
        }}
      >
        <div
  style={{
    position: "sticky",
    top: 0,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(20px)",
    paddingBottom: "20px",
    marginBottom: "24px",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }}
  >
    <div>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 900,
          marginBottom: "8px",
          color: "#111",
        }}
      >
        {song.title}
      </h1>

      <p
        style={{
          color: "#666",
          fontWeight: 500,
        }}
      >
        {song.language}
      </p>
    </div>

    <button
      onClick={onClose}
      style={{
        border: "none",
        background: "transparent",
        fontSize: "1.5rem",
        cursor: "pointer",
      }}
    >
      ×
    </button>
  </div>

  <div
    style={{
      height: "1px",
      background: "rgba(0,0,0,0.08)",
      marginTop: "16px",
    }}
  />
</div>

<div
  style={{
    whiteSpace: "pre-line",
    lineHeight: 2,
    color: "#333",
    fontSize: "1.05rem",
  }}
>
  {song.lyrics}
</div>
      </div>
    </div>
  );
}