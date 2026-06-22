export default function PageWrapper({ children }) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",

        background: `
          radial-gradient(
            circle at top left,
            rgba(255,255,255,0.95),
            transparent 35%
          ),
          radial-gradient(
            circle at top right,
            rgba(220,230,255,0.55),
            transparent 40%
          ),
          radial-gradient(
            circle at bottom left,
            rgba(255,240,220,0.35),
            transparent 45%
          ),
          linear-gradient(
            180deg,
            #f8fafc 0%,
            #eef2f7 100%
          )
        `,
      }}
    >
      {/* Ambient Light 1 */}
      <div
        style={{
          position: "fixed",
          top: "-250px",
          left: "-250px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)",
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />

      {/* Ambient Light 2 */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          right: "-250px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(180,200,255,0.35), transparent 70%)",
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

      {/* Ambient Light 3 */}
      <div
        style={{
          position: "fixed",
          bottom: "-250px",
          left: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,230,200,0.25), transparent 70%)",
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "24px",
          paddingBottom: "120px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}