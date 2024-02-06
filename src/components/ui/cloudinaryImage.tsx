"use client";
import { CldImage, type CldImageProps } from "next-cloudinary";

function CloudinaryImage(props: CldImageProps) {
  return <CldImage {...props} />;
}

export { CloudinaryImage };
