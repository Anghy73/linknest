import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default async function ShortIdPage(props: {
  params: Promise<{
    shortId: string;
  }>;
}) {
  const { shortId } = await props.params;
  const [guestId, setGuestId] = useState<string>("");

  useEffect(() => {
    let storedGuestId = localStorage.getItem("guestId");
    if (!storedGuestId) {
      storedGuestId = crypto.randomUUID();
      localStorage.setItem("guestId", storedGuestId);
    }
    setGuestId(storedGuestId);
  }, []);

  const data = await prisma.shortLink.findUnique({
    where: {
      shortUrl_guestId: {
        shortUrl: shortId,
        guestId: guestId,
      },
    },
  });

  console.log(data);

  if (!data) {
    redirect("/");
  }

  redirect(data.url);
  // return {
  // redirect: {
  //   destination: data.url,
  // },
  // };
}
