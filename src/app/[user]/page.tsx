'use client'

import React, { useEffect, useState } from "react";
import LayoutSimple from "@/ui/links/links-layout-simple";
import { getAllLinks } from "@/lib/actions";
import useLinksStore from "@/lib/store";

export default function Page() {
  const saveLinks = useLinksStore((store) => store.saveLinks)
  const links = useLinksStore((store) => store.links)
  const [guestId, setGuestId] = useState<string>("");

  useEffect(() => {
    const initGuestAndLinks = async () => {
      let storedGuestId = localStorage.getItem("guestId");
      if (!storedGuestId) {
        storedGuestId = crypto.randomUUID();
        localStorage.setItem("guestId", storedGuestId);
      }
      setGuestId(storedGuestId);
  
      const res = await getAllLinks(storedGuestId);
      saveLinks(res);
    }
    initGuestAndLinks()
  }, []);

  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen py-20">
      <h1>Link Nest</h1>
      <div className="w-full">
        <div className="text-center">
          <LayoutSimple links={links}></LayoutSimple>
        </div>
      </div>
    </div>
  );
}
