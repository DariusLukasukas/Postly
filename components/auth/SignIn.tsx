"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";
import { CommandIcon, LogIn } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

interface SignInProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  button?: boolean;
}

export default function SignIn({ open, setOpen, button }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl,
        redirect: false,
      });

      if (!res?.error) {
        router.push(callbackUrl);
        router.refresh();
      } else {
        setError("Invalid email or password.");
      }
    } catch (error: any) {}

    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {button && (
        <DialogTrigger asChild>
          <button className="flex w-full flex-row items-start justify-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold hover:bg-black hover:bg-opacity-10 md:justify-start">
            <LogIn size={22} />
            <div className="hidden md:flex">Sign in</div>
          </button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex w-full flex-col items-center gap-2 py-4">
            <div className="text-xl">Welcome back 👋</div>
            <div className="font-normal">
              Enter your details to sign in to your account
            </div>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="w-full space-y-8 px-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
            />
          </div>
          {error && <Alert>{error}</Alert>}
          <Button disabled={isSubmitting} className="w-full">
            Sign in
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
