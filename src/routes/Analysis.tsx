import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import JsZip from "jszip";

export default function Analysis() {
  let location = useLocation();

  if (!location.state) {
    return <>No zip file provided</>;
  }

  let { zipArrayBuffer }: { zipArrayBuffer: ArrayBuffer | undefined } = location.state;

  const [zipFile, setZipFile] = useState<JsZip>();

  useEffect(() => {
    if (!zipArrayBuffer) return;

    new JsZip().loadAsync(zipArrayBuffer).then(setZipFile);
  }, [ zipArrayBuffer ]);

  const files = useMemo(() => {
    if (!zipFile) return [];

    return Object.values(zipFile.files).map((file) => file.name);
  }, [ zipFile ]);

  return <>
    {zipFile && <>
      <h1>Zip file loaded</h1></>}

    {files.map((file) => <p>{file}</p>)}
  </>;
}
