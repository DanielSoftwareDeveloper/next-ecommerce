import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

function SectionTitle({ title, subtitle, className }: Props) {
  return (
    <div className="mb-6">
      <h2 className={cn("text-xl font-semibold", className)}>{title}</h2>
      <p className="">{subtitle}</p>
    </div>
  );
}
export default SectionTitle;
