import Image, { ImageProps } from "../Image";

export default function TopBanner(props: ImageProps) {
  return (
    <Image width="100%" height="150px" alt="top-banner" zIndex="0" {...props} />
  );
}
