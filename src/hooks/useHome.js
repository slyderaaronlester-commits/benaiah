import { useEffect, useState } from "react";

export default function useHome() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/16IgK_49XvMJ2w2siJMTDTfRW3_4U99rhjfI5UciEMsc/Home"
    )
      .then((res) => res.json())
      .then((data) => setHome(data))
      .catch((err) => console.error(err));
  }, []);

  return home;
}