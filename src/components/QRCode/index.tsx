import React, { useMemo, useCallback } from "react";
import Flex, { FlexBoxProps } from "../Layout/Flex";
import qrcode from "qrcode-generator";

function createQRCodeASCII(data: string) {
  const typeNumber = 4;
  const errorCorrectionLevel = "L";
  const qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(data);
  qr.make();
  return qr.createSvgTag();
}

export default function QRCode({
  data,
  ...props
}: FlexBoxProps & { data: string }) {
  const qr = useMemo(() => {
    const rawQr = createQRCodeASCII(data);
    return rawQr;
  }, [data]);

  const copyShareLink = useCallback(() => {
    navigator.clipboard.writeText(data).then(
      () => {
        console.info("copied text: ", data);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  }, [data]);

  return (
    <Flex
      {...props}
      onClick={copyShareLink}
      title={"copy link to clipboard"}
      style={{ cursor: "pointer" }}
      dangerouslySetInnerHTML={{ __html: qr }}
    />
  );
}
