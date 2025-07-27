"use client";

import { getDataUrl } from "@/lib/actions";
import PreviewLink from "@/ui/links/PreviewLink";
import React, { Suspense, useState } from "react";
import { LinkData } from "../../../types/link-data-type";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [currentUrl, setCurrentUrl] = useState<LinkData | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rawData = new FormData(e.currentTarget);
    const url = rawData.get("url");

    console.log(url);
    console.log("hi");
    const data = await getDataUrl(url);
    if (data) setCurrentUrl(data.dataUrl);
    console.log(data?.dataUrl);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen py-20">
      <h1>Link Nest</h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-full max-w-xl gap-4"
      >
        <Input type="url" placeholder="https://" name="url" ></Input>
        <Button variant="default" >Get Data form Url</Button>
      </form>

      <div className="w-full">
        <div className="text-center">
          {currentUrl && <PreviewLink {...currentUrl} />}
        </div>
      </div>
    </div>
  );
}
