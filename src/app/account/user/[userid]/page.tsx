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

// interface PageProps {
//   params: Promise<{ userid: string }>; // Define params as a Promise
// }

export default function Page() {
  // const [username, setUsername] = useState<string>('')
  const links = useLinksStore((store) => store.links);
  const linksFilters = useLinksStore((store) => store.linksFilters);

  const [layoutSelect, setLayoutSelect] = useState<LayoutI>("simple");

  console.log(layoutSelect);

  return (
    <div className="flex flex-col gap-10 items-center min-h-screen mt-40 pb-30">
      <div className="w-full justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-6 mx-auto">
          {/* <p className="py-2 font-bold">hello {username}</p> */}
          <LinkFilter></LinkFilter>
          <div className="flex gap-2">
            <button
              title="simple"
              style={layoutSelect == 'simple' ? { backgroundColor: '#88888844', border: "2px solid black" } : {}}
              onClick={() => setLayoutSelect("simple")}
              className="p-2 border-1 rounded-lg cursor-pointer hover:bg-slate-200/30"
            >
              <TfiLayoutMediaCenter size={25}></TfiLayoutMediaCenter>
            </button>
            <button
              title="info"
              style={layoutSelect == 'info' ? { backgroundColor: '#88888844', border: "2px solid black" } : {}}
              onClick={() => setLayoutSelect("info")}
              className="p-2 border-1 rounded-lg cursor-pointer hover:bg-slate-200"
            >
              <TfiLayoutMediaLeftAlt size={23}></TfiLayoutMediaLeftAlt>
            </button>
            <button
              title="preview"
              style={layoutSelect == 'preview' ? { backgroundColor: '#88888844', border: "2px solid black" } : {}}
              onClick={() => setLayoutSelect("preview")}
              className="p-2 border-1 rounded-lg cursor-pointer hover:bg-slate-200/30"
            >
              <TfiLayoutMediaCenterAlt size={23}></TfiLayoutMediaCenterAlt>
            </button>
          </div>
          <div className="w-full justify-center items-center">
            {layoutSelect == "simple" ? (
              linksFilters.length >= 1 ? (
                <LayoutSimple links={linksFilters}></LayoutSimple>
              ) : (
                <LayoutSimple links={links}></LayoutSimple>
              )
            ) : null}
            {layoutSelect == "info" ? (
              linksFilters.length >= 1 ? (
                <LayoutInfo links={linksFilters}></LayoutInfo>
              ) : (
                <LayoutInfo links={links}></LayoutInfo>
              )
            ) : null}
            {layoutSelect == "preview" ? (
              linksFilters.length >= 1 ? (
                <LayoutPreview links={linksFilters}></LayoutPreview>
              ) : (
                <LayoutPreview links={links}></LayoutPreview>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
