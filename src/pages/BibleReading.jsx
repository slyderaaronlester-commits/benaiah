import PageWrapper from "../components/PageWrapper";
import Dock from "../components/Dock";
import useBibleReading from "../hooks/useBibleReading";

export default function BibleReading() {
    const readings = useBibleReading();
    const reading = readings[0];
    if (!reading) {
  return <PageWrapper>Loading...</PageWrapper>;
}
  return (
    <PageWrapper>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 900,
          marginBottom: "24px",
        }}
      >
        Bible Reading
      </h1>

      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        {reading.title}
      </h2>

      <div
        style={{
          lineHeight: 2,
          marginBottom: "32px",
          color: "#444",
        }}
      >
        {reading.passage}
      </div>

      <h3
        style={{
          marginBottom: "16px",
        }}
      >
        Reflection Questions
      </h3>

      {[
  reading.reflection1,
  reading.reflection2,
  reading.reflection3,
].map((question, index) => (
        <div
          key={index}
          style={{
            marginBottom: "12px",
            color: "#666",
          }}
        >
          • {question}
        </div>
      ))}

      <Dock />
    </PageWrapper>
  );
}