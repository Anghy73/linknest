"use client";

import React, { useEffect, useState } from "react";
import LayoutSimple from "@/ui/links/links-layout-simple";
import { getAllLinks } from "@/lib/actions";
import useLinksStore from "@/lib/store";
import LayoutInfo from "@/ui/links/links-layout-info";
import LayoutPreview from "@/ui/links/links-layout-preview";
import LinkFilter from "@/ui/filters/link-filters";

import { TfiLayoutMediaCenter } from "react-icons/tfi";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";

type LayoutI = "simple" | "info" | "preview";

interface PageProps {
  params: Promise<{ userid: string }>; // Define params as a Promise
}

export default async function Page({ params }: PageProps) {
  const username = (await params).userid
  const saveLinks = useLinksStore((store) => store.saveLinks);
  const links = useLinksStore((store) => store.links);

  const [layoutSelect, setLayoutSelect] = useState<LayoutI>("simple");

  useEffect(() => {
    const initGuestAndLinks = async () => {
      let storedGuestId = localStorage.getItem("guestId");
      if (!storedGuestId) {
        storedGuestId = crypto.randomUUID();
        localStorage.setItem("guestId", storedGuestId);
      }

      const res = await getAllLinks(storedGuestId);
      saveLinks(res);
    };
    initGuestAndLinks();
  }, []);

  console.log(layoutSelect);

  return (
    <div className="flex flex-col gap-10 items-center min-h-screen mt-40 pb-30">
      <div className="w-full justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto">
          <p className="py-2 font-bold">hello {username}</p>
          <LinkFilter></LinkFilter>
          <div className="flex gap-2">
            <button
            title="simple"
              onClick={() => setLayoutSelect("simple")}
              className="p-2 border-1 rounded-lg cursor-pointer hover:bg-slate-200/30"
            >
              <TfiLayoutMediaCenter size={25}></TfiLayoutMediaCenter>
            </button>
            <button
            title="info"
              onClick={() => setLayoutSelect("info")}
              className="p-2 border-1 rounded-lg cursor-pointer hover:bg-slate-200/30"
            >
              <TfiLayoutMediaLeftAlt size={23}></TfiLayoutMediaLeftAlt>
            </button>
            <button
            title="preview"
              onClick={() => setLayoutSelect("preview")}
              className="p-2 border-1 rounded-lg cursor-pointer hover:bg-slate-200/30"
            >
              <TfiLayoutMediaCenterAlt size={23}></TfiLayoutMediaCenterAlt>
            </button>
          </div>
          <div className="w-full justify-center items-center">
            {layoutSelect == "simple" && (
              <LayoutSimple links={links}></LayoutSimple>
            )}
            {layoutSelect == "info" && <LayoutInfo links={links}></LayoutInfo>}
            {layoutSelect == "preview" && (
              <LayoutPreview links={links}></LayoutPreview>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
