import { socialList } from "./social-list.data";
import SocialItem from "./SocialItem";

function Social() {
  return (
    <ul className="flex gap-x-4">
      {socialList.map((item) => (
        <SocialItem key={item.id} icon={item.icon} href={item.href} />
      ))}
    </ul>
  );
}
export default Social;
