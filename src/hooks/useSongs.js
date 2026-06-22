import { useEffect, useState } from "react";

export default function useSongs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/16IgK_49XvMJ2w2siJMTDTfRW3_4U99rhjfI5UciEMsc/Songs"
    )
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  }, []);

  return songs;
}