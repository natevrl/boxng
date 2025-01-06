import LogoSvg from "./LogoSvg";

export default function Loader(): JSX.Element {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LogoSvg className="h-24 w-24 text-popover animate-pulse-faster " />
    </div>
  );
}