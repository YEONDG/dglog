import { SpinSVG } from "@/components/common/spin";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <SpinSVG />
    </div>
  );
};
export default Loading;
