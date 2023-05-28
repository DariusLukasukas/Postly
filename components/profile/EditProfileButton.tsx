"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ImageUpload from "./ImageUploadField";
import { toast } from "react-hot-toast";
import PencilIcon from "../ui/icons/PencilIcon";
import HoverCard from "../ui/hover-card";

interface EdiButtonProps {
  id: string;
  name: string;
  bio: string;
  username: string;
  profileImage: string;
  coverImage: string;
}

export default function EdiButton({
  currentUser,
}: {
  currentUser: EdiButtonProps;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    const newCharCount = newValue.length;

    // maxLength
    if (newCharCount <= 250) {
      setBio(newValue);
      setCharCount(newCharCount);
      autoResizeTextarea();
    }
  };

  const autoResizeTextarea = () => {
    const textarea = document.getElementById("bio-textarea");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    setProfileImage(currentUser?.profileImage);
    setCoverImage(currentUser?.coverImage);
    setName(currentUser?.name);
    setUsername(currentUser?.username);
    setBio(currentUser?.bio);

    // Calculate initial character count
    const initialCharCount = currentUser?.bio?.length || 0;
    setCharCount(initialCharCount);
  }, [
    currentUser,
    currentUser?.profileImage,
    currentUser?.coverImage,
    currentUser?.name,
    currentUser?.username,
    currentUser?.bio,
  ]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const res = await fetch(`/api/users/${currentUser.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profileImage,
          coverImage,
          name,
          username,
          bio,
        }),
      });

      if (res.ok) {
        toast.success("Successfully updated profile!");
        setOpen(false);
        router.refresh();
      } else {
        const errorData = await res.json();
        toast.error(`Error updating profile: ${errorData.error}`);
      }
    } catch (error: any) {
      toast.error(`Error updating profile: ${error.message}`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="group relative rounded-lg border border-neutral-100 p-1.5 dark:border-neutral-700">
        <PencilIcon className="h-5 w-5" />
        <HoverCard label="Edit profile" />
      </DialogTrigger>
      <DialogContent className="dark:bg-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-center">Edit profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <ImageUpload
            value={coverImage}
            coverImageButton={true}
            onChange={(image) => setCoverImage(image as string)}
            label="Upload cover image"
            maxSize={500 * 1024}
            className="h-32 w-full rounded-xl"
          />
          <ImageUpload
            value={profileImage}
            profileImageButton={true}
            onChange={(image) => setProfileImage(image as string)}
            label="Upload profile image"
            maxSize={500 * 1024}
            className="-mt-20 ml-6 h-32 w-32 rounded-full"
          />
          <div className="my-3 mt-6">
            <Label className="mb-1 text-xs">Display name*</Label>
            <Input
              value={name}
              placeholder={currentUser.name}
              maxLength={256}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-3">
            <Label className="mb-1 text-xs">Username*</Label>
            <Input
              value={username}
              placeholder="Username"
              maxLength={256}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="my-3">
            <Label className="mb-1 text-xs">Bio</Label>
            <Textarea
              rows={3}
              value={bio}
              placeholder="Bio"
              id="bio-textarea"
              maxLength={250}
              onChange={handleBioChange}
              className="resize-none dark:placeholder-neutral-400"
            />
          </div>
          <div className="mb-3 flex justify-end text-right text-sm text-neutral-500">
            {charCount} of 250
          </div>

          <Button type="submit" size={"sm"} className="ml-auto">
            Done
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
