import { useEffect, useState } from "react";

export default function useBibleReading() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/16IgK_49XvMJ2w2siJMTDTfRW3_4U99rhjfI5UciEMsc/Reading"
    )
      .then((res) => res.json())
      .then((data) => setReadings(data))
      .catch((err) => console.error(err));
  }, []);

  return readings;
}