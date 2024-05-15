import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}: TransformedImageProps) => {
  const downloadHandler = () => {};
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
        <h3 className="h3-bold text-dark-600">Transformed</h3>
        {hasDownload && (
          <Button className="download-btn" onClick={downloadHandler}>
            <Image
            src="/assets/icons/download.svg"
            alt="Download"
            width={24}
            height={24}
            className="pb-[6px]"
            />
          </Button>
        )}
      </div>
      { image?.publicId && transformationConfig ? (
        <div className="relative">

        </div>
      ):(
        <div className="transformed-placeholder">
            Transformed Image
        </div>
      )}
    </div>
  );
};

export default TransformedImage;
