import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href: string;
}

function SocialItem({ icon: Icon }: Props) {
  return (
    <Icon className="text-lg hover:text-orange-400 dark:hover:text-orange-300 hover:cursor-pointer transition duration-150 ease-in-out" />
  );
}
export default SocialItem;
