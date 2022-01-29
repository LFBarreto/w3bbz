import React, { useEffect, useMemo, useRef } from "react";

const JSON_PREFIX = "data:application/json;base64,";
const SVG_PREFIX = "data:image/svg+xml;base64,";

function NFTViewer({
  data,
  extraIframeHTML,
  insertionCallback,
}: {
  data: string;
  extraIframeHTML?: string;
  insertionCallback?: (ref: any) => void;
}) {
  const ref = useRef<HTMLIFrameElement | undefined>();

  const metadata = useMemo(() => {
    if (!data || typeof data !== "string") return null;

    return JSON.parse(atob(data.replace(JSON_PREFIX, "")));
  }, [data]);

  const svgData = useMemo(() => {
    if (!metadata) return null;

    return atob(metadata.image.replace(SVG_PREFIX, ""));
  }, [metadata]);

  useEffect(() => {
    if (ref && ref.current && !!svgData) {
      if (ref.current?.contentDocument?.body) {
        ref.current.contentDocument.body.innerHTML = `${extraIframeHTML}<div id="inner-iframe">${svgData}</div>`;

        if (insertionCallback) setTimeout(() => insertionCallback(ref), 500);
      }
    }
  }, [ref, insertionCallback, svgData, extraIframeHTML]);

  return (
    <>
      <iframe
        style={{ border: "none" }}
        sandbox="allow-scripts allow-same-origin"
        // @ts-expect-error legacy ref
        ref={ref}
        width="100%"
        height="100%"
      />
    </>
  );
}

export default NFTViewer;
