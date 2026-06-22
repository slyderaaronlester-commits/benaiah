import PageWrapper from "../components/PageWrapper";
import Dock from "../components/Dock";
import useBibleStudy from "../hooks/useBibleStudy";

export default function BibleStudy() {
    const studies = useBibleStudy();
const study = studies[0];

if (!study) {
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
        Bible Study
      </h1>

      <h2
        style={{
          marginBottom: "8px",
        }}
      >
        {study.title}
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "24px",
        }}
      >
        {study.week}
      </p>

      <div
        style={{
          lineHeight: 2,
          marginBottom: "32px",
          color: "#444",
        }}
      >
        {study.notes}
      </div>

      <h3
        style={{
          marginBottom: "16px",
        }}
      >
        Discussion Questions
      </h3>

      {[
  study.question1,
  study.question2,
  study.question3,
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