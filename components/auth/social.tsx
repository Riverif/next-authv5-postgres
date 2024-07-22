import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  //   const searchParams = useSearchParams();
  //   const callbackUrl = searchParams.get("callbackUrl");

  //   const onClick = (provider: "google" | "github") => {
  //     signIn(provider, {
  //       callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
  //     });
  //   };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="secondary"
        // onClick={() => onClick("google")}
      >
        <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
          <FcGoogle className="h-5 w-5" />
        </div>
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="secondary"
        // onClick={() => onClick("github")}
      >
        <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
          <FaGithub className="h-5 w-5" />
        </div>
      </Button>
    </div>
  );
};
