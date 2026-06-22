export default function SlideshowCard() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "520px",
        margin: "0 auto 32px auto",
        aspectRatio: "1080 / 1350",
        borderRadius: "40px",
        overflow: "hidden",
        position: "relative",
        background: "#f5f5f5",
        boxShadow: `
          0 20px 60px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.8)
        `,
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2000"
        alt="worship"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          right: "20px",
          padding: "16px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
        }}
      >
        Sunday Fellowship
      </div>
    </div>
  );
}