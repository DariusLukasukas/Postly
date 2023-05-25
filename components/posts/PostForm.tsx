"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { createPost } from "@/actions/createPost";
import AddImageIcon from "../ui/icons/AddImageIcon";

interface PostFormProps {
  placeholder: string;
}
export default function PostForm({ placeholder }: PostFormProps) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expand, setExpanded] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);

    if (message.length > 0) {
      await createPost(message);
      setMessage("");
      router.refresh();
    }
    setSubmitted(false);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    autoResizeTextarea();
  };

  const autoResizeTextarea = () => {
    const textarea = document.getElementById("post-textarea");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <div className="mt-1 border-b-[1px] border-neutral-100 px-5 py-2 dark:border-neutral-800 md:block">
      <div className="flex flex-row gap-4">
        <div>
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              placeholder="blur"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        {/* <div><Avatar userId={userId} src={src} /></div> */}
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <Textarea
              rows={1}
              maxLength={250}
              value={message}
              onChange={handleTextareaChange}
              onFocus={() => setExpanded(true)}
              id="post-textarea"
              placeholder={placeholder}
              className="min-h-20 resize-none border-none focus-visible:ring-0 dark:placeholder-neutral-400"
            />
            {expand && (
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <AddImageIcon className="h-7 w-7 text-neutral-500" />
                </div>
                <div className="space-x-2">
                  <Button
                    variant={"link"}
                    size={"sm"}
                    onClick={() => {
                      setExpanded(false);
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
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
