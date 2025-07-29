"use client";

import { getDataUrl } from "@/lib/actions";
import React, { useState } from "react";
import { LinkData } from "../../../types/link-data-type";
import useLinksStore from "@/lib/store";
import LayoutSimple from "@/ui/links/links-layout-simple";
import LinkCreateForm from "@/ui/links/link-create-form";

export default function Page() {
  const { links, addLink } = useLinksStore();
  const [currentUrl, setCurrentUrl] = useState<LinkData | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rawData = new FormData(e.currentTarget);
    const url = rawData.get("url");

    console.log(url);
    console.log("hi");
    const data = await getDataUrl(url);
    if (data) {
      console.log("agregando");
      setCurrentUrl(data.dataUrl);
      addLink(data.dataUrl);
    }
    console.log(data?.dataUrl);
  };

  // useEffect(() => {
  //   console.log('hi links');

  // }, [links])

  console.log(links);

  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen py-20">
      <h1>Link Nest</h1>

      <LinkCreateForm></LinkCreateForm>

      {/* <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-full max-w-xl gap-4"
      >
        <Input type="url" placeholder="https://" name="url"></Input>
        <Button variant="default">Get Data form Url</Button>
      </form> */}
      

      <div className="w-full">
        <div className="text-center">
          {links.length >= 1 ? (
            <LayoutSimple></LayoutSimple>
          ) : (
            <p>No se han encontrado links</p>
          )}

          {/* {currentUrl && <PreviewLink {...currentUrl} />} */}
        </div>
      </div>
    </div>
  );
}
