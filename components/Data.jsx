"use client";

import { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/api/marco")
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(
          Object.entries(d)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n"),
        );
      })
      .catch((err) => console.log("Fetching error: ", err));
  }, []);
  return <p>Fetch - {data}</p>;
}
