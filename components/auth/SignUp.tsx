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

interface SignUpProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  button?: boolean;
}

export default function SignUp({ open, setOpen, button }: SignUpProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
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
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        // router.push(callbackUrl);
        // router.refresh();
        const res = await signIn("credentials", {
          email,
          password,
          callbackUrl,
          redirect: false,
        });

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
            <div className="hidden md:flex">Sign up</div>
          </button>
        </DialogTrigger>
      )}
      <DialogContent className="dark:bg-neutral-800">
        <DialogHeader>
          <DialogTitle className="flex w-full flex-col items-center gap-2 py-4">
            <div className="text-xl">Create an account</div>
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
              placeholder="Email@example.com"
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              placeholder="Username"
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
            Register
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
