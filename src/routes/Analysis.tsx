import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import * as zip from "@zip.js/zip.js";

export default function Analysis() {
  let location = useLocation();

  if (!location.state) {
    return <>No zip file provided</>;
  }

  let { zipArrayBuffer }: { zipArrayBuffer: ArrayBuffer | undefined } = location.state;

  const [entries, setEntries] = useState<zip.Entry[]>([]);

  const zipFile = useMemo(() => {
    if (!zipArrayBuffer) return;

    return new zip.ZipReader(new zip.Uint8ArrayReader(new Uint8Array(zipArrayBuffer)));
  }, [ zipArrayBuffer ]);

  useEffect(() => {
    if (!zipFile) return;
    
    zipFile.getEntries().then(e => setEntries(e));
  }, [ zipFile ]); 

  return <>
    {entries && entries.map((entry) => {
      return <p>{entry.filename}</p>;
    })}
  </>;
}
