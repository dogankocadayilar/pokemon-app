import { useEffect, useState } from "react";

function Types() {
  const [types, setTypes] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/type/");

  useEffect(() => {}, [url]);

  return <div>Types</div>;
}

export default Types;
