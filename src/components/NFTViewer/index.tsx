import React, { useEffect, useMemo, useRef } from "react";

function NFTViewer({
  metadata,
  id,
  extraIframeHTML,
  insertionCallback,
  onIframeClick,
  ...props
}: {
  metadata: { image: string };
  extraIframeHTML?: string;
  insertionCallback?: (ref: any) => void;
  onIframeClick?: () => void;
}) {
  const ref = useRef<HTMLIFrameElement | undefined>();

  const svgData = useMemo(() => {
    if (!metadata) return null;

    return metadata.image;
  }, [metadata]);

  useEffect(() => {
    if (ref && ref.current && !!svgData) {
      if (ref.current?.contentDocument?.body) {
        // workarround for ff
        ref.current.contentDocument.open();
        ref.current.contentDocument.close();
        ref.current.contentDocument.body.innerHTML = `<style>html, body { margin: 0; padding: 0; overflow:hidden; height: 100%; width: 100%;}#inner-iframe, svg { width: 100%; height: 100%}</style>${
          extraIframeHTML || ""
        }<div id="inner-iframe">${svgData}</div>`;

        if (insertionCallback) setTimeout(() => insertionCallback(ref), 500);

        if (onIframeClick) {
          setTimeout(() => {
            if (!ref || !ref.current || !ref.current.contentDocument)
              return null;
            const innerDoc = ref.current.contentDocument;
            innerDoc.onclick = onIframeClick;
          }, 50);
        }
      }
    }
  }, [ref, insertionCallback, svgData, extraIframeHTML, onIframeClick]);

  return (
    <iframe
      {...props}
      id={"Iframe-" + id}
      style={{ border: "none" }}
      // @ts-expect-error legacy ref
      ref={ref}
      width="100%"
      height="100%"
    />
  );
}

export default NFTViewer;
