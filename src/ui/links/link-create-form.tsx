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
import React, { Suspense, useState } from "react";
import { Data, LinkData } from "../../../types/link-data-type";
import { Skeleton } from "@/components/ui/skeleton";
import useLinksStore from "@/lib/store";

const data = {
  author: null,
  date: "2025-07-28T20:32:37.000Z",
  description:
    "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
  image: {
    url: "https://react.dev/images/og-home.png",
    type: "png",
    size: 292630,
    height: 567,
    width: 1080,
  },
  lang: "en",
  logo: {
    url: "https://react.dev/apple-touch-icon.png",
    type: "png",
    size: 5670,
    height: 180,
    width: 180,
  },
  publisher: "react.dev",
  title: "React",
  url: "https://react.dev/",
};

function LinkCreateForm() {
  const [urlData, setUrlData] = useState<Data | null>(null);
  const [urlDataLoader, setUrlDataLoader] = useState(false);
  const [urlError, setUrlError] = useState("");
  const [isUrl, setIsUrl] = useState(false);

  const [shortUrl, setShortUrl] = useState('');

  const { links } = useLinksStore();
  const urls = links.map((link) => link.data.url);
  console.log(urls);

  const setLink = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlData(null);
    setUrlError("");
    setShortUrl("")
    const regex = new RegExp("^https://[a-zA-Z0-9.-]+.[a-zA-Z]{2,}(/.*)?$");
    const url = e.currentTarget.value;
    if (!regex.test(url)) return;
    if (urls.includes(url)) {
      setUrlError("link already exists");
      return;
    }
    console.log("correcto");
    setUrlDataLoader(true);
    try {
      const res = await fetch(`https://api.microlink.io/?url=${url}`);
      const json = await res.json();
      console.log(json.statusCode);
      if (json.statusCode == null) {
        setUrlError("link don't exists");
        return;
      }
      const genShortUrl = `${Math.random().toString(36).substr(2, 6)}`
      setShortUrl(genShortUrl)
      setUrlData(json.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");

      setUrlDataLoader(false);
    }
  };

  return (
    <>
      <div>link-create-form</div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button onClick={() => setUrlData(null)} variant="outline">+ Add Link</Button>
          </DialogTrigger>
          <DialogContent className="md:min-w-5xl">
            <DialogHeader className="mb-4">
              <DialogTitle>Add link</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
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
                {/* <div className="grid gap-3"> */}
                <div className="grid gap-3">
                  <Label htmlFor="shortUrl">Short Link</Label>
                  <div className="flex">
                    <Button variant={"outline"}>linknest.dev/</Button>
                    <Input
                      id="shortUrl"
                      name="shortUrl"
                      defaultValue={shortUrl ? shortUrl : ''}
                      disabled
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex gap-2">
                    <SelectTags></SelectTags>
                    <AddTag></AddTag>
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
              <div className="flex-1">
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
              <Button type="submit" disabled={isUrl}>
                Save link
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}

export default LinkCreateForm;
