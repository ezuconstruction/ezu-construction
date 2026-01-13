import Image, { ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "width" | "height"> & {
  width?: number;
  height?: number;
};

const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 800;

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  sizes,
  unoptimized,
  fill,
  ...props
}: OptimizedImageProps) => {
  const isSvg = typeof src === "string" && src.endsWith(".svg");
  const useFill = Boolean(fill);

  return (
    <Image
      src={src}
      alt={alt}
      {...(useFill
        ? { fill: true }
        : {
            width: width ?? DEFAULT_WIDTH,
            height: height ?? DEFAULT_HEIGHT,
          })}
      sizes={
        sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      }
      unoptimized={unoptimized ?? isSvg}
      {...props}
    />
  );
};

export default OptimizedImage;
