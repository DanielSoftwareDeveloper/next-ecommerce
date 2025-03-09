import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function MainWrapper({ children, className }: Props) {
  return (
    <div className={cn("w-[90%] max-w-[1200px] mx-auto", className)}>
      {children}
    </div>
  );
}
export default MainWrapper;
