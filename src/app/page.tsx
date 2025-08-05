"use client";

import { buttonVariants } from "@/components/ui/button";
import useLinksStore from "@/lib/store";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const setGuestId = useLinksStore((store) => store.setGuestId);
  const guestId = useLinksStore((store) => store.guestId);

  useEffect(() => {
    const initGuest = async () => {
      let storedGuestId = localStorage.getItem("guestId");
      if (!storedGuestId) {
        storedGuestId = crypto.randomUUID();
        localStorage.setItem("guestId", storedGuestId);
      }
      setGuestId(storedGuestId)
    };
    initGuest();
  }, []);
  // const user = 'user'
  console.log(guestId);
  
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>This will be the landing pageaa</h1>
        <Link
          className={buttonVariants({ variant: "destructive" })}
          href={`/account/user/${guestId}`}
        >
          Go to App
        </Link>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
