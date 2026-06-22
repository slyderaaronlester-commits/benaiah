import { useEffect, useState } from "react";

export default function useBibleStudy() {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/16IgK_49XvMJ2w2siJMTDTfRW3_4U99rhjfI5UciEMsc/Study"
    )
      .then((res) => res.json())
      .then((data) => setStudies(data))
      .catch((err) => console.error(err));
  }, []);

  return studies;
}