"use client";

import { getDataUrl } from "@/lib/actions";
import PreviewLink from "@/ui/PreviewLink";
import React, { Suspense, useState } from "react";

type dataUrl = {
  title: string;
};

export default function Page() {
  const [currentUrl, setCurrentUrl] = useState<dataUrl | null>(null);

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
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
      <h1>Link Nest</h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-full max-w-xl gap-4"
      >
        <input
          name="url"
          className="p-2 border-2"
          type="text"
          placeholder="url"
        />
        <button className="border-2 p-3 rounded-md cursor-pointer hover:bg-black/80">
          Obtener Data Url
        </button>
      </form>

      <div className="w-full">
        <div className="bg-red-400 text-center">
          {currentUrl && <PreviewLink {...currentUrl} />}
          {/* <Suspense fallback={<p>Cargando...</p>}>
          </Suspense> */}
        </div>
      </div>
    </div>
  );
}
