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

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const rawData = new FormData(e.currentTarget);
  //   const url = rawData.get("url");
  //   const data = await getDataUrl(url);
  //   if (data) {
  //     setCurrentUrl(data.dataUrl);
  //     addLink(data.dataUrl);
  //   }
  // };

  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen py-20">
      <h1>Link Nest</h1>
      <LinkCreateForm></LinkCreateForm>
      <div className="w-full">
        <div className="text-center">
          {links.length >= 1 ? (
            <LayoutSimple></LayoutSimple>
          ) : (
            <p>No se han encontrado links</p>
          )}
        </div>
      </div>
    </div>
  );
}
