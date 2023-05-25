"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FormEvent, useEffect, useState, useRef } from "react";
import { createPost } from "@/actions/createPost";
import { useRouter } from "next/navigation";
import PlusIcon from "../ui/icons/PlusIcon";
import HoverCard from "../ui/hover-card";
import AddImageIcon from "../ui/icons/AddImageIcon";

export default function TweetButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [rows, setRows] = useState(1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const lineCount = message.split("\n").length;
    setRows(lineCount);
  }, [message]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    if (message.length > 0) {
      await createPost(message);
      setMessage("");
      setOpen(false);
      router.refresh();
    }
    setSubmitted(false);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    autoResizeTextarea();
  };

  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="group relative ml-auto flex h-14 w-14 cursor-pointer items-center justify-center">
        <div className="rounded-full bg-black p-2 dark:bg-neutral-100">
          <PlusIcon className="select-none text-white dark:text-black" />
        </div>
        <HoverCard label="New post" />
      </DialogTrigger>
      <DialogContent className="h-auto dark:bg-neutral-800">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            rows={1}
            maxLength={250}
            value={message}
            onChange={handleTextareaChange}
            id="post-textarea"
            ref={textareaRef} // Assign the ref to the textarea element
            placeholder="What's on your mind..."
            className="min-h-20 resize-none border-none ring-0 focus-visible:outline-none focus-visible:ring-0 dark:placeholder-neutral-400"
          />
          <div className="mt-4 flex items-center justify-between">
            <div>
              <AddImageIcon className="h-7 w-7 text-neutral-500" />
            </div>
            <div className="space-x-2">
              <Button
                variant={"link"}
                size={"sm"}
                onClick={() => {
                  setOpen(false);
                  setMessage("");
                }}
                className="font-light"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size={"sm"}
                disabled={!message || submitted}
                className="font-semibold"
              >
                Post
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
