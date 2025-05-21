import Image from "next/image";

export const SpinSVG = () => {
  return (
    <Image
      src="/Spin.svg"
      alt="Loading..."
      className="animate-spin"
      width={150}
      height={150}
    />
  );
};
