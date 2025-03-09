import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import { Button } from "../ui/button";

function AuthSocial() {
  return (
    <div className="flex space-x-3 ">
      <Button variant="outline" className="flex-1 cursor-pointer">
        <FcGoogle />
      </Button>
      <Button variant="outline" className="flex-1 cursor-pointer">
        <FaApple />
      </Button>
    </div>
  );
}
export default AuthSocial;
