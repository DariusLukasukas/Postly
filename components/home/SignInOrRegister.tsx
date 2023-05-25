"use client";

import { Button } from "@/components/ui/button";
import SignIn from "../auth/SignIn";
import { useState } from "react";
import SignUp from "../auth/SignUp";

export default function SignInOrRegister() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleSignInOpen = () => {
    setSignInOpen(true);
  };

  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };

  return (
    <div className="my-2 h-36 w-full rounded-xl bg-orange-400">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <h2 className="text-lg font-bold">Welcome to Postly</h2>
        <div className="flex flex-row gap-2">
          <Button
            onClick={handleSignInOpen}
            size={"sm"}
            variant={"secondary"}
            className="rounded-full"
          >
            Sign in
          </Button>
          <Button
            onClick={handleSignUpOpen}
            size={"sm"}
            className="rounded-full"
          >
            Register
          </Button>
        </div>
      </div>

      <SignIn open={signInOpen} setOpen={setSignInOpen} />
      <SignUp open={signUpOpen} setOpen={setSignUpOpen} />
    </div>
  );
}
