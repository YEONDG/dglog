import Image from "next/image";

import zustandIcon from "@/app/assets/icons/zustand_icon.png";
import { Ref } from "react";

interface ZustandIconProps {
  className?: string;
  ref?: Ref<HTMLImageElement>;
}
const ZustandIcon = ({ className, ref }: ZustandIconProps) => {
  return (
    <Image
      className={className}
      ref={ref}
      src={zustandIcon}
      alt="Zustand 로고"
      width={32}
      height={32}
    />
  );
};

ZustandIcon.displayName = "ZustandIcon";

export default ZustandIcon;
