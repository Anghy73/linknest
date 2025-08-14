"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectTags } from "../tags/select-tags";
import AddTag from "../tags/add-tag";
import { Textarea } from "@/components/ui/textarea";
import PreviewLink from "./PreviewLink";
import React, { Suspense, useEffect, useState } from "react";
import { Data, LinkData } from "../../../types/link-data-type";
import { Skeleton } from "@/components/ui/skeleton";
import useLinksStore from "@/lib/store";
import { createLink, getAllLinks, getDataUrl } from "@/lib/actions";
import prisma from "@/lib/prisma";

// const data = {
//   author: null,
//   date: "2025-07-28T20:32:37.000Z",
//   description:
//     "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
//   image: {
//     url: "https://react.dev/images/og-home.png",
//     type: "png",
//     size: 292630,
//     height: 567,
//     width: 1080,
//   },
//   lang: "en",
//   logo: {
//     url: "https://react.dev/apple-touch-icon.png",
//     type: "png",
//     size: 5670,
//     height: 180,
//     width: 180,
//   },
//   publisher: "react.dev",
//   title: "React",
//   url: "https://react.dev/",
// };

type TagI = {
  id: number;
  value: string;
  label: string;
};

function LinkCreateForm() {
  const [urlData, setUrlData] = useState<Data | null>(null);
  const [urlDataLoader, setUrlDataLoader] = useState(false);
  const [urlError, setUrlError] = useState("");
  const [isUrl, setIsUrl] = useState(true);

  const [shortUrl, setShortUrl] = useState("");
  const [tags, setTags] = useState<TagI[]>([]);

  const [open, setOpen] = useState(false);

  const [guestId, setGuestId] = useState<string>("");

  const saveLinks = useLinksStore((store) => store.saveLinks)

  useEffect(() => {
    let storedGuestId = localStorage.getItem("guestId");
    if (!storedGuestId) {
      storedGuestId = crypto.randomUUID();
      localStorage.setItem("guestId", storedGuestId);
    }
    setGuestId(storedGuestId);
  }, []);

  const setLink = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlData(null);
    setUrlError("");
    setShortUrl("");
    const regex = new RegExp("^https://[a-zA-Z0-9.-]+.[a-zA-Z]{2,}(/.*)?$");
    const url = e.currentTarget.value;
    console.log(url);
    
    if (!guestId) return;
    const links = await getAllLinks(guestId);
    const urls = links.map((link) => link.url);
    if (url.trim() == "") return;
    if (!regex.test(url)) {
      setUrlError("url invalid");
      return;
    }
    if (urls.includes(url)) {
      setUrlError("link already exists");
      return;
    }
    setUrlDataLoader(true);
    try {
      const res = await fetch(`https://api.microlink.io/?url=${url}`);
      const json = await res.json();
      if (json.statusCode == null) {
        setUrlError("link don't exists");
        return;
      }
      setIsUrl(false);
      const genShortUrl = `${Math.random().toString(36).substr(2, 6)}`;
      setShortUrl(genShortUrl);
      setUrlData(json.data);
    } catch (error) {
      console.log(error);
    } finally {
      setUrlDataLoader(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(localStorage.getItem("guestId"));

    const linkTagsIds = tags.map((tag) => tag.id);

    // aqui tomaria todos los datos y crearia los links como en la función action
    const rawDataWithTags = {
      title: urlData?.title,
      description: urlData?.description,
      logo: urlData?.logo.url,
      img: urlData?.image.url,
      url: urlData?.url,
      shortUrl: shortUrl,
      comment: formData.get("comment"),
      linkTags: linkTagsIds,
      guestId: guestId,
    };

    try {
      const res = await createLink(rawDataWithTags);
      if (res.id) {
        setOpen(false);
        const res = await getAllLinks(guestId);
        saveLinks(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addTag = (tag: TagI) => {
    const newTag = tag;
    const newState = [...tags, newTag];
    setTags(newState);
  };

  const handleOpen = () => {
    setOpen(!open);
    setTags([]);
    setShortUrl("");
    setUrlError("");
    setUrlData(null);
  };

  return (
    <>
      <Dialog onOpenChange={handleOpen} open={open}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            disabled={!guestId}
            variant="default"
            className="cursor-pointer"
          >
            Add Link
          </Button>
        </DialogTrigger>
        <DialogContent className="md:min-w-3xl lg:min-w-6xl">
          <DialogHeader className="mb-4">
            <DialogTitle>Add link</DialogTitle>
            <DialogDescription>
              Add a new link to your collection. You can assign tags and leave
              comments.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex gap-10">
              <div className="grid gap-4 flex-2">
                <div className="grid gap-3">
                  <Label htmlFor="url">Link</Label>
                  <div className="flex justify-center items-center gap-2">
                    <div>
                      {urlDataLoader || !urlData ? (
                        <Skeleton className="w-10 h-10 rounded-full"></Skeleton>
                      ) : null}
                      {urlData?.logo.url ? (
                        <img
                          className="w-10 h-10"
                          src={urlData?.logo?.url}
                          alt={`icon from page ${urlData?.title}`}
                        />
                      ) : null}
                    </div>
                    <Input
                      type="url"
                      id="url"
                      name="url"
                      placeholder="https://"
                      onChange={(e) => setLink(e)}
                    />
                  </div>
                  {urlError && <span className="text-red-400">{urlError}</span>}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="shortUrl">Short Link</Label>
                  <div className="flex">
                    <Button variant={"outline"} type="button">
                      linknest.dev/
                    </Button>
                    <Input
                      id="shortUrl"
                      name="shortUrl"
                      defaultValue={shortUrl ? shortUrl : ""}
                      disabled
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex gap-2">
                    <SelectTags
                      tags={tags}
                      addTag={addTag}
                      setTags={setTags}
                    ></SelectTags>
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="comments">Comments</Label>
                  <div className="flex gap-2">
                    <Textarea
                      className="max-h-[100px] min-h-[100px]"
                      placeholder="Website to see projects of other people..."
                      name="comment"
                    ></Textarea>
                  </div>
                </div>
              </div>
              <div className="flex-1 hidden md:block">
                <div>
                  <PreviewLink
                    urlDataLoader={urlDataLoader}
                    urlData={urlData}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                type="submit"
                onClick={() => console.log("click save link")}
                disabled={isUrl}
              >
                Save link
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LinkCreateForm;
