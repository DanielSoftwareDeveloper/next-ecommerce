import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthChangeButton from "./AuthChangeButton";
import AuthSeparator from "./AuthSeparator";
import AuthSocial from "./AuthSocial";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  authChangeButtonLabel: string;
  authChangeButtonLink: string;
  authChangeButtonHref: string;
  showSocial?: boolean;
}

function AuthCard({
  children,
  title,
  description,
  authChangeButtonLabel,
  authChangeButtonLink,
  authChangeButtonHref,
}: Props) {
  return (
    <Card className="dark:bg-[#353535] w-[400px] shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-xl mt-4">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
        <AuthSeparator />
        <AuthSocial />
      </CardContent>

      <CardFooter className="text-center">
        <AuthChangeButton
          label={authChangeButtonLabel}
          link={authChangeButtonLink}
          href={authChangeButtonHref}
        />
      </CardFooter>
    </Card>
  );
}
export default AuthCard;
