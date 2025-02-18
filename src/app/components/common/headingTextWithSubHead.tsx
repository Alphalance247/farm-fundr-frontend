import { ReactNode } from "react";
import Image from "next/image";

interface propsMarging {
  heading?: ReactNode;
  subhead?: ReactNode;
  className?: string;
  withSubHead?: boolean;
  withImage?: boolean;
  iconImage: string;
  width?: number;
  height?: number;
}

const HeadingTextWithSubHead: React.FC<propsMarging> = ({
  heading,
  subhead,
  className,
  withSubHead = true,
  withImage = true,
  iconImage,
  width,
  height,
}) => {
  return (
    <>
      <div className={className}>
        <h1 className={`text-5xl text-[#5f5f5f] font-bold font-aristoBold`}>
          {heading}
        </h1>
        {withImage && (
          <div className="mt-[-1rem]">
            <Image
              src={iconImage}
              className="mx-auto"
              width={width}
              height={height}
              alt="vector1"
            />
          </div>
        )}
      </div>

      {withSubHead && (
        <p className="text-lg text-[#7C7C7C] font-poppinsRegular text-center">
          {subhead}
        </p>
      )}
    </>
  );
};

export default HeadingTextWithSubHead;
