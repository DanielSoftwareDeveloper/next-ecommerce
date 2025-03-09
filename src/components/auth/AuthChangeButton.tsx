import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  label: string;
  link: string;
  href: string;
}

function AuthChangeButton({ label, link, href }: Props) {
  return (
    <div className="w-full flex items-center justify-center">
      <p className="text-sm">{label}</p>
      <Button variant="link" className="py-0 pr-0 pl-2">
        <Link href={href} className="text-sm text-blue-600">{link}</Link>
      </Button>
    </div>
  );
}
export default AuthChangeButton;
